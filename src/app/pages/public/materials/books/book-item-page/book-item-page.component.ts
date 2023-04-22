import {ChangeDetectorRef, Component, OnInit} from '@angular/core'
import {Router} from "@angular/router"
import {take} from "rxjs"
import {BooksCoursesContent} from "../../../../../models/types/materials.interface"
import {HttpService} from "../../../../../helpers/services/http.service"
import {environment} from "../../../../../../environments/environment"
import {MaterialsService} from "../../materials.service";
import {NotificationsService} from "../../../../../helpers/services/notifications.service";
import {PreloaderTypesEnum} from "../../../../../models/enum/preloader-types.enum";

@Component({
  selector: 'app-book-item-page',
  templateUrl: './book-item-page.component.html',
  styleUrls: ['./book-item-page.component.scss']
})
export class BookItemPageComponent implements OnInit {

  public env = environment

  private actualBookId!: number

  public actualBook!: BooksCoursesContent

  constructor(
    private router: Router,
    private cd: ChangeDetectorRef,
    private httpService: HttpService,
    private materialService: MaterialsService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.getActualBookId()
  }

  private getActualBookId(): void {
    this.actualBookId = Number(this.router.url.split('/books/')[1])
    this.getActualBook()
  }

  private getActualBook(): void {
    this.notificationService.setPreloader({event: true, type: PreloaderTypesEnum.variant_2})
    this.httpService.getItemBookCourse(this.actualBookId)
      .pipe(take(1))
      .subscribe((itemBook: BooksCoursesContent) => {
        this.actualBook = itemBook
        this.notificationService.setPreloader({event: false, type: PreloaderTypesEnum.variant_2})
      })
  }

  public onReaction(event: 'like' | 'dislike'): void {
    const buffer = this.materialService.onReaction(this.actualBook, event)
    this.actualBook = buffer.material
    this.httpService.addReaction(buffer.eventData).pipe(take(1)).subscribe()
  }

}
