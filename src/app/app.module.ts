import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './helpers/request.interceptor';

import { AppComponent } from './app.component';
import { SharedViewModule } from './shared-views/shared-views.module';
import { PublicRoutingModule } from './public-layout/public-layout-routing.module';
import { AdminRoutingModule } from './admin-layout/admin-layout-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,

    AdminLayoutModule,
    PublicLayoutModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
