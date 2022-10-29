import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { ErrorsNitificationComponent } from './errors-nitification/errors-nitification.component';
import { TitleHeadingComponent } from './title-heading/title-heading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from '../public-layout/public-layout-routing.module';
import { AdminRoutingModule } from '../admin-layout/admin-layout-routing.module';
import { ResponseNotificationComponent } from './response-notification/response-notification.component';



@NgModule({
  declarations: [
    CustomFooterComponent,
    CustomHeaderComponent,
    ErrorsNitificationComponent,
    TitleHeadingComponent,
    ResponseNotificationComponent
  ],
  exports: [
    CustomFooterComponent,
    CustomHeaderComponent,
    ErrorsNitificationComponent,
    TitleHeadingComponent,
    ResponseNotificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PublicRoutingModule,
    AdminRoutingModule
  ],
})
export class SharedViewModule { }
