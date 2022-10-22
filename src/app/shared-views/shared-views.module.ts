import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { ErrorsNitificationComponent } from './errors-nitification/errors-nitification.component';
import { TitleHeadingComponent } from './title-heading/title-heading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from '../public-layout/public-layout-routing.module';
import { AdminRoutingModule } from '../admin-layout/admin-layout-routing.module';



@NgModule({
  declarations: [
    CustomFooterComponent,
    CustomHeaderComponent,
    ErrorsNitificationComponent,
    TitleHeadingComponent
  ],
  exports: [
    CustomFooterComponent,
    CustomHeaderComponent,
    ErrorsNitificationComponent,
    TitleHeadingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    PublicRoutingModule,
    AdminRoutingModule
  ],
})
export class SharedViewModule { }
