import { Component, OnInit } from '@angular/core'
import {BehaviorSubject} from "rxjs"
import {BooksCoursesContent} from "../../../../models/types/materials.interface"
import {Router} from "@angular/router"
import {HttpService} from "../../../../services/http.service"

@Component({
  selector: 'app-course-item-page',
  templateUrl: './course-item-page.component.html',
  styleUrls: ['./course-item-page.component.scss']
})
export class CourseItemPageComponent implements OnInit {

  private actualCourseId!: number

  public actualCourse$ = new BehaviorSubject<BooksCoursesContent>({} as BooksCoursesContent)

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.getActualBookId()
  }

  private getActualBookId(): void {
    this.actualCourseId = Number(this.router.url.split('/courses/')[1])
    this.getActualCourse()
  }

  private getActualCourse(): void {
    this.httpService.getItemBookCourse(this.actualCourseId)
      .subscribe((itemCourse: BooksCoursesContent) => {
        this.actualCourse$.next(itemCourse)
      })
  }
}
