import {Component, Input, OnInit} from '@angular/core'
import {BooksCoursesContent} from "../../../../models/types/materials.interface"
import {environment} from "../../../../../environments/environment"
import {HttpService} from "../../../../services/http.service";
import {take} from "rxjs";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  public env = environment

  @Input() public book!: BooksCoursesContent

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  public onReaction(event: 'like' | 'dislike'): void {
    const eventData = {itemId: this.book.id, value: 0} as { itemId: number, value: 1 | 0 | -1 }
    if (event === 'like') {
      if (!this.book.userRating) {
        eventData['value'] = 1
        ++this.book.likes
        this.book.userRating = 1
        this.changeReaction(eventData)
        return
      }
      if (this.book.userRating === -1) {
        eventData['value'] = 1
        ++this.book.likes
        --this.book.dislikes
        this.book.userRating = 1
        this.changeReaction(eventData)
        return
      }
      if (this.book.userRating === 1) {
        eventData['value'] = 0
        --this.book.likes
        this.book.userRating = 0
        this.changeReaction(eventData)
        return
      }
    }
    if (event === 'dislike') {
      if (!this.book.userRating) {
        eventData['value'] = -1
        ++this.book.dislikes
        this.book.userRating = -1
        this.changeReaction(eventData)
        return
      }
      if (this.book.userRating === 1) {
        eventData['value'] = -1
        ++this.book.dislikes
        --this.book.likes
        this.book.userRating = -1
        this.changeReaction(eventData)
        return
      }
      if (this.book.userRating === -1) {
        eventData['value'] = 0
        --this.book.dislikes
        this.book.userRating = 0
        this.changeReaction(eventData)
        return
      }
    }
  }

  private changeReaction(eventData: { itemId: number, value: 1 | 0 | -1 }): void {
    this.httpService.addReaction(eventData).pipe(take(1)).subscribe()
  }

}
