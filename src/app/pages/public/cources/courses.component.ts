import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, take } from "rxjs"
import { BooksCoursesContent, InputDataBooksCourses, QueryParams } from "../../../models/types/materials.interface"
import { HttpService } from "../../../services/http.service"
import { LocalStorageService } from "../../../services/local-storage.service"
import { MaterialEnum } from "../../../models/enum/material.enum"
import { PageEvent } from "@angular/material/paginator"

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
//TODO перенести этот функционал в отдельный класс поскольку много дублирующихся данных
export class CoursesComponent implements OnInit {

  public coursesList$ = new BehaviorSubject<BooksCoursesContent[]>([])

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
    this.localStorageService.getLocalStorageItem('queryParamCourses')
      ? this.queryParams = JSON.parse(this.localStorageService.getLocalStorageItem('queryParamCourses') || '')
      : this.changeQueryParams()
    this.getAllCoursesData()
  }

  private getAllCoursesData(): void {
    this.httpService.getAllBooksCourses(
      {
        itemType: MaterialEnum.courses,
        page: this.queryParams.page,
        size: this.queryParams.size,
        reverse: this.queryParams.reverse,
        sort: this.queryParams.sort,
      }
    ).pipe(take(1))
      .subscribe((item: InputDataBooksCourses) => {
        this.queryParams.totalPages = item.totalPages
        this.queryParams.totalElements = item.totalElements
        this.coursesList$.next(item.content)
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

  private changeQueryParams(): void {
    this.httpService.saveInLKQueryParam('queryParamCourses', this.queryParams)
  }

}
