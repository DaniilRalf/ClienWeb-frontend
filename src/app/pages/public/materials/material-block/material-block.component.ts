import {Component, Input, OnInit} from '@angular/core'
import {BooksCoursesContent} from "../../../../models/types/materials.interface"
import {environment} from "../../../../../environments/environment"
import {HttpService} from "../../../../helpers/services/http.service";
import {take} from "rxjs";

@Component({
  selector: 'el-material-block',
  templateUrl: './material-block.component.html',
  styleUrls: ['./material-block.component.scss']
})
export class MaterialBlockComponent implements OnInit {

  public env = environment

  @Input() public material!: BooksCoursesContent

  @Input() public page!: string

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  public onReaction(event: 'like' | 'dislike'): void {
    const eventData = {itemId: this.material.id, value: 0} as { itemId: number, value: 1 | 0 | -1 }
    if (event === 'like') {
      if (!this.material.userRating) {
        eventData['value'] = 1
        ++this.material.likes
        this.material.userRating = 1
        this.changeReaction(eventData)
        return
      }
      if (this.material.userRating === -1) {
        eventData['value'] = 1
        ++this.material.likes
        --this.material.dislikes
        this.material.userRating = 1
        this.changeReaction(eventData)
        return
      }
      if (this.material.userRating === 1) {
        eventData['value'] = 0
        --this.material.likes
        this.material.userRating = 0
        this.changeReaction(eventData)
        return
      }
    }
    if (event === 'dislike') {
      if (!this.material.userRating) {
        eventData['value'] = -1
        ++this.material.dislikes
        this.material.userRating = -1
        this.changeReaction(eventData)
        return
      }
      if (this.material.userRating === 1) {
        eventData['value'] = -1
        ++this.material.dislikes
        --this.material.likes
        this.material.userRating = -1
        this.changeReaction(eventData)
        return
      }
      if (this.material.userRating === -1) {
        eventData['value'] = 0
        --this.material.dislikes
        this.material.userRating = 0
        this.changeReaction(eventData)
        return
      }
    }
  }

  private changeReaction(eventData: { itemId: number, value: 1 | 0 | -1 }): void {
    this.httpService.addReaction(eventData).pipe(take(1)).subscribe()
  }

}
