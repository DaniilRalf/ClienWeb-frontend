import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-layout-routing.module';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomHeaderComponent } from '../shared-views/custom-header/custom-header.component';
import { CustomFooterComponent } from '../shared-views/custom-footer/custom-footer.component';



@NgModule({
  declarations: [
    MainComponent,
    AuthenticationComponent,
    CustomHeaderComponent,
    CustomFooterComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PublicLayoutModule { }
