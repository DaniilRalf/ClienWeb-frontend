import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, take } from "rxjs"
import { HttpService } from "../../../services/http.service"
import { BooksCoursesContent, InputDataBooksCourses, QueryParams } from "../../../models/types/materials.interface"
import { LocalStorageService } from "../../../services/local-storage.service"
import { PageEvent } from "@angular/material/paginator"
import { MaterialEnum } from "../../../models/enum/material.enum"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
//TODO перенести этот функционал в отдельный класс поскольку много дублирующихся данных
export class BooksComponent implements OnInit {

  public booksList$ = new BehaviorSubject<BooksCoursesContent[]>([])

  public queryParams: QueryParams = {
    page: 0,
    size: 10,
    reverse: true,
    sort: 'title',
    totalPages: 0,
    totalElements: 0
  }

  constructor(private httpService: HttpService,
              private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageService.getLocalStorageItem('queryParamBooks')
      ? this.queryParams = JSON.parse(this.localStorageService.getLocalStorageItem('queryParamBooks') || '')
      : this.changeQueryParams()
    this.getAllBooksData()
  }

  private getAllBooksData(): void {
    this.httpService.getAllBooksCourses(
      {
        itemType: MaterialEnum.books,
        page: this.queryParams.page,
        size: this.queryParams.size,
        reverse: this.queryParams.reverse,
        sort: this.queryParams.sort,
       }
    ).pipe(take(1))
      .subscribe((item: InputDataBooksCourses) => {
        this.queryParams.totalPages = item.totalPages
        this.queryParams.totalElements = item.totalElements
        this.booksList$.next(item.content)
      }), (err: any) => {
      //TODO add handler error
    }
  }

  public pageChanged(event: PageEvent) {
    this.queryParams.page = event.pageIndex
    this.queryParams.size = event.pageSize
    this.changeQueryParams()
    this.getAllBooksData()
  }

  private changeQueryParams(): void {
    this.httpService.saveInLKQueryParam('queryParamBooks', this.queryParams)
  }

}

