import {Component, OnInit} from '@angular/core'
import {BooksCoursesContent, InputDataBooksCourses, QueryParams} from "../../../models/types/materials.interface"
import {HttpService} from "../../../helpers/services/http.service"
import {LocalStorageService} from "../../../helpers/services/local-storage.service"
import {BehaviorSubject, take} from "rxjs"
import {PageEvent} from "@angular/material/paginator"
import {NotificationsService} from "../../../helpers/services/notifications.service";
import {PreloaderTypesEnum} from "../../../models/enum/preloader-types.enum";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  public dataList$ = new BehaviorSubject<any[]>([])

  private queryParamKey = 'queryParamAuthors'

  public queryParams: QueryParams = {
    page: 0,
    size: 10,
    reverse: true,
    sort: 'name',
    totalPages: 0,
    totalElements: 0
  }

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.localStorageService.getLocalStorageItem(this.queryParamKey)
      ? this.queryParams = JSON.parse(this.localStorageService.getLocalStorageItem(this.queryParamKey) || '')
      : this.changeQueryParams()
    this.getAllAuthors()
  }

  private getAllAuthors(): void {
    this.notificationService.setPreloader({event: true, type: PreloaderTypesEnum.variant_1})
    this.httpService.getAllAuthors(
      {
        page: this.queryParams.page,
        size: this.queryParams.size,
        reverse: this.queryParams.reverse,
        sort: this.queryParams.sort,
      }
    ).pipe(take(1))
      // TODO types
      .subscribe((item: any) => {
        this.queryParams.totalPages = item.totalPages
        this.queryParams.totalElements = item.totalElements
        this.dataList$.next(item.content)
        this.notificationService.setPreloader({event: false, type: PreloaderTypesEnum.variant_1})
      })
  }

  public pageChanged(event: PageEvent) {
    this.queryParams.page = event.pageIndex
    this.queryParams.size = event.pageSize
    this.changeQueryParams()
    this.getAllAuthors()
  }

  public sortChanged(event: string): void {
    this.queryParams.sort = event
    this.changeQueryParams()
    this.getAllAuthors()
  }

  public refreshQueryParams(): void {
    this.queryParams = {
      page: 0,
      size: 10,
      reverse: true,
      sort: 'title',
      totalPages: 0,
      totalElements: 0
    }
    this.changeQueryParams()
    this.getAllAuthors()
  }

  private changeQueryParams(): void {
    this.httpService.saveInLSQueryParam(this.queryParamKey, this.queryParams)
  }

}
