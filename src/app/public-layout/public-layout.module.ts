import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-layout-routing.module';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomHeaderComponent } from '../shared-views/custom-header/custom-header.component';
import { CustomFooterComponent } from '../shared-views/custom-footer/custom-footer.component';
import { TitleHeadingComponent } from '../shared-views/title-heading/title-heading.component';
import { ReviewComponent } from './review/review.component';
import { ErrorsNitificationComponent } from '../shared-views/errors-nitification/errors-nitification.component';


@NgModule({
  declarations: [
    MainComponent,
    AuthenticationComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
    TitleHeadingComponent,
    ReviewComponent,
    ErrorsNitificationComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicLayoutModule { }
