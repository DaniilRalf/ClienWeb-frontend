import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpService} from "../../../services/http.service";
import {BooksContent, InputDataBooks, QueryParams} from "../../../models/types/materials.interface";
import {LocalStorageService} from "../../../services/local-storage.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public booksList$ = new BehaviorSubject<BooksContent[]>([])

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
    this.httpService.getAllBooks(
      {
        page: this.queryParams.page,
        size: this.queryParams.size,
        reverse: this.queryParams.reverse,
        sort: this.queryParams.sort,
       }
    )
      .subscribe((item: InputDataBooks) => {
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

