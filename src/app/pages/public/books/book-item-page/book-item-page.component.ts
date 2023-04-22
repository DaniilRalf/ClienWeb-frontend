import {Component, OnInit} from '@angular/core'
import {Router} from "@angular/router"
import {BehaviorSubject} from "rxjs"
import {BooksCoursesContent} from "../../../../models/types/materials.interface"
import {HttpService} from "../../../../services/http.service"
import {environment} from "../../../../../environments/environment"

@Component({
  selector: 'app-book-item-page',
  templateUrl: './book-item-page.component.html',
  styleUrls: ['./book-item-page.component.scss']
})
export class BookItemPageComponent implements OnInit {

  public env = environment

  private actualBookId!: number

  public actualBook$ = new BehaviorSubject<BooksCoursesContent>({} as BooksCoursesContent)

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.getActualBookId()
  }

  private getActualBookId(): void {
    this.actualBookId = Number(this.router.url.split('/books/')[1])
    this.getActualBook()
  }

  private getActualBook(): void {
    this.httpService.getItemBookCourse(this.actualBookId)
      .subscribe((itemBook: BooksCoursesContent) => {
        this.actualBook$.next(itemBook)
      })
  }

}
