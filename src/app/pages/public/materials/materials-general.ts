import {ChangeDetectorRef, Directive, EventEmitter, Inject, Injector, OnInit} from "@angular/core"
import { BehaviorSubject, take } from "rxjs"
import { BooksCoursesContent, InputDataBooksCourses, QueryParams } from "../../../models/types/materials.interface"
import { HttpService } from "../../../helpers/services/http.service"
import { LocalStorageService } from "../../../helpers/services/local-storage.service"
import { PageEvent } from "@angular/material/paginator"
import {NotificationsService} from "../../../helpers/services/notifications.service";
import {AppInjector} from "../../../app.component";
import {PreloaderTypesEnum} from "../../../models/enum/preloader-types.enum";

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

  private notificationService = AppInjector.get(NotificationsService)

  constructor(
    protected httpService: HttpService,
    protected localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.localStorageService.getLocalStorageItem(this.queryParamKey)
      ? this.queryParams = JSON.parse(this.localStorageService.getLocalStorageItem(this.queryParamKey) || '')
      : this.changeQueryParams()
    this.getAllCoursesData()
  }

  private getAllCoursesData(): void {
    this.notificationService.setPreloader({event: true, type: PreloaderTypesEnum.variant_1})
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
        this.notificationService.setPreloader({event: false, type: PreloaderTypesEnum.variant_1})
      })
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
    this.getAllCoursesData()
  }

  private changeQueryParams(): void {
    this.httpService.saveInLSQueryParam(this.queryParamKey, this.queryParams)
  }

}
