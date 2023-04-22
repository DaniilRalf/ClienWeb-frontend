import {Component, Injector, OnInit} from '@angular/core'
import {NotificationsService} from "./helpers/services/notifications.service";
import {Observable} from "rxjs";
import {PreloaderTypesEnum} from "./models/enum/preloader-types.enum";

export let AppInjector: Injector

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{

  title = 'clientWeb-frontend'

  isActivePreloader!: Observable<{event: boolean, type: PreloaderTypesEnum.variant_1}>

  constructor(
    private injector: Injector,
    public notificationsService: NotificationsService,
  ) {
    AppInjector = this.injector
  }

  ngOnInit(): void {
    this.isActivePreloader = this.notificationsService.getPreloader()
  }
}
