import { Component, OnInit } from '@angular/core'
import { Router} from "@angular/router"
import {BehaviorSubject} from "rxjs";
import {BooksContent} from "../../../../models/types/materials.interface";
import {HttpService} from "../../../../services/http.service";

@Component({
  selector: 'app-book-item-page',
  templateUrl: './book-item-page.component.html',
  styleUrls: ['./book-item-page.component.scss']
})
export class BookItemPageComponent implements OnInit {

  private actualBookId!: number

  public actualBook$ = new BehaviorSubject<BooksContent>({} as BooksContent)

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.getActualBookId()
  }

  private getActualBookId(): void {
    this.actualBookId = Number(this.router.url.split('/books/')[1])
    this.getActualBook()
  }

  private getActualBook(): void {
    this.httpService.getItemBook(this.actualBookId)
      .subscribe((itemBook: BooksContent) => {
        //TODO delete
        console.log(itemBook)
        this.actualBook$.next(itemBook)
      })
  }

}
