import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { PanelComponent } from './admin-layout/panel/panel.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './helpers/request.interceptor';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AdminLayoutModule,
    PublicLayoutModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
],
  bootstrap: [AppComponent]
})
export class AppModule { }
