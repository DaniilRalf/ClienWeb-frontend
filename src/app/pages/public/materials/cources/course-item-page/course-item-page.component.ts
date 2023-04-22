import { Component, OnInit } from '@angular/core'
import {BehaviorSubject, take} from "rxjs"
import {BooksCoursesContent} from "../../../../../models/types/materials.interface"
import {Router} from "@angular/router"
import {HttpService} from "../../../../../helpers/services/http.service"
import {environment} from "../../../../../../environments/environment";
import {MaterialsService} from "../../materials.service";
import {PreloaderTypesEnum} from "../../../../../models/enum/preloader-types.enum";
import {NotificationsService} from "../../../../../helpers/services/notifications.service";

@Component({
  selector: 'app-course-item-page',
  templateUrl: './course-item-page.component.html',
  styleUrls: ['./course-item-page.component.scss']
})
export class CourseItemPageComponent implements OnInit {

  public env = environment

  private actualCourseId!: number

  public actualCourse!: BooksCoursesContent

  constructor(
    private router: Router,
    private httpService: HttpService,
    private materialService: MaterialsService,
    private notificationService: NotificationsService,
  ) {}

  ngOnInit(): void {
    this.getActualBookId()
  }

  private getActualBookId(): void {
    this.actualCourseId = Number(this.router.url.split('/courses/')[1])
    this.getActualCourse()
  }

  private getActualCourse(): void {
    this.notificationService.setPreloader({event: true, type: PreloaderTypesEnum.variant_2})
    this.httpService.getItemBookCourse(this.actualCourseId)
      .pipe(take(1))
      .subscribe((itemCourse: BooksCoursesContent) => {
        this.actualCourse = itemCourse
        this.notificationService.setPreloader({event: false, type: PreloaderTypesEnum.variant_2})
      })
  }

  public onReaction(event: 'like' | 'dislike'): void {
    const buffer = this.materialService.onReaction(this.actualCourse, event)
    this.actualCourse = buffer.material
    this.httpService.addReaction(buffer.eventData).pipe(take(1)).subscribe()
  }
}
