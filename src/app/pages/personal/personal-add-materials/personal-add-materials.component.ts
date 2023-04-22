import {Component, OnInit} from '@angular/core'
import {AddAuthorInterface, AddBooksCoursesInterface} from "../../../models/types/materials.interface"
import {HttpService} from "../../../helpers/services/http.service"
import {MaterialEnum} from "../../../models/enum/material.enum"
import {NotificationsService} from "../../../helpers/services/notifications.service"

@Component({
  selector: 'app-personal-add-materials',
  templateUrl: './personal-add-materials.component.html',
  styleUrls: ['./personal-add-materials.component.scss']
})
export class PersonalAddMaterialsComponent implements OnInit {

  public savingBookFile?: { id: number, name: string }

  public savingCourseFile?: { id: number, name: string }

  public savingAuthorFile?: { id: number, name: string }

  constructor(
    private httpService: HttpService,
    private notificationsService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
  }

  public bookOrCourseEmit(event: AddBooksCoursesInterface): void {
    this.httpService.addBookOrCourse(event)
      .subscribe({
        next: () => {
          this.notificationsService.openEventNotification('Материал успешно сохранен')
        }
      })
  }

  public authorEmit(event: AddAuthorInterface): void {
    this.httpService.addAuthor(event)
      .subscribe({
        next: () => {
          this.notificationsService.openEventNotification('Автор успешно сохранен')
        }
      })
  }

  public fileEmit(data: { event: FormData, tag: MaterialEnum }): void {
    this.httpService.addPhoto(data.event)
      //TODO types
      .subscribe((item: any) => {
        //TODO create forEach at element
        // TODO change switch-case
        if (data.tag === MaterialEnum.books) {
          this.savingBookFile = item[0]
        }
        if (data.tag === MaterialEnum.courses) {
          this.savingCourseFile = item[0]
        }
        if (data.tag === MaterialEnum.author) {
          this.savingAuthorFile = item[0]
        }
      })
  }

}
