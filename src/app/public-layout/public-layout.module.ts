import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-layout-routing.module';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TitleHeadingComponent } from '../shared-views/title-heading/title-heading.component';
import { ReviewComponent } from './review/review.component';
import { ErrorsNitificationComponent } from '../shared-views/errors-nitification/errors-nitification.component';
import { SharedViewModule } from '../shared-views/shared-views.module';


@NgModule({
  declarations: [
    MainComponent,
    AuthenticationComponent,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,

    SharedViewModule,

    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicLayoutModule { }