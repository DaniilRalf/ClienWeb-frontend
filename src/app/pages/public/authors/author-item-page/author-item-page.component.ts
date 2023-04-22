import {Component, OnInit} from '@angular/core'
import {BehaviorSubject} from "rxjs"
import {BooksCoursesContent} from "../../../../models/types/materials.interface"
import {Router} from "@angular/router"
import {HttpService} from "../../../../helpers/services/http.service"
import {environment} from "../../../../../environments/environment";
import {NotificationsService} from "../../../../helpers/services/notifications.service";
import {PreloaderTypesEnum} from "../../../../models/enum/preloader-types.enum";

@Component({
  selector: 'app-author-item-page',
  templateUrl: './author-item-page.component.html',
  styleUrls: ['./author-item-page.component.scss']
})
export class AuthorItemPageComponent implements OnInit {

  public env = environment

  private actualAuthorId!: number

  // TODO types
  public actualAuthor$ = new BehaviorSubject<any>({} as any)

  constructor(
    private router: Router,
    private httpService: HttpService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.getActualAuthorId()
  }

  private getActualAuthorId(): void {
    this.actualAuthorId = Number(this.router.url.split('/authors/')[1])
    this.getActualAuthors()
  }

  private getActualAuthors(): void {
    this.notificationService.setPreloader({event: true, type: PreloaderTypesEnum.variant_2})
    this.httpService.getItemAuthor(this.actualAuthorId)
      // TODO types
      .subscribe((itemAuthor: any) => {
        this.actualAuthor$.next(itemAuthor)
        this.notificationService.setPreloader({event: false, type: PreloaderTypesEnum.variant_2})
      })
  }

}
