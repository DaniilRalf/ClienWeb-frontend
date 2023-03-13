import {Directive, EventEmitter, OnInit} from "@angular/core"
import { BehaviorSubject, take } from "rxjs"
import { BooksCoursesContent, InputDataBooksCourses, QueryParams } from "../../models/types/materials.interface"
import { HttpService } from "../../services/http.service"
import { LocalStorageService } from "../../services/local-storage.service"
import { PageEvent } from "@angular/material/paginator"

@Directive()
export class MaterialGeneral implements OnInit {

  public dataList$ = new BehaviorSubject<BooksCoursesContent[]>([])
  protected queryParamKey!: string
  protected itemType!: number

  public queryParams: QueryParams = {
    page: 0,
    size: 10,
    reverse: true,
    sort: 'title',
    totalPages: 0,
    totalElements: 0
  }

  constructor(
    protected httpService: HttpService,
    protected localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageService.getLocalStorageItem(this.queryParamKey)
      ? this.queryParams = JSON.parse(this.localStorageService.getLocalStorageItem(this.queryParamKey) || '')
      : this.changeQueryParams()
    this.getAllCoursesData()
  }

  private getAllCoursesData(): void {
    this.httpService.getAllBooksCourses(
      {
        itemType: this.itemType,
        page: this.queryParams.page,
        size: this.queryParams.size,
        reverse: this.queryParams.reverse,
        sort: this.queryParams.sort,
      }
    ).pipe(take(1))
      .subscribe((item: InputDataBooksCourses) => {
        this.queryParams.totalPages = item.totalPages
        this.queryParams.totalElements = item.totalElements
        this.dataList$.next(item.content)
      }), (err: any) => {
      //TODO add handler error
    }
  }

  public pageChanged(event: PageEvent) {
    this.queryParams.page = event.pageIndex
    this.queryParams.size = event.pageSize
    this.changeQueryParams()
    this.getAllCoursesData()
  }

  public sortChanged(): void {
    this.changeQueryParams()
    this.getAllCoursesData()
  }

  private changeQueryParams(): void {
    this.httpService.saveInLKQueryParam(this.queryParamKey, this.queryParams)
  }

}
