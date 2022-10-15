import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { PanelComponent } from './admin-layout/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AdminLayoutModule,
    PublicLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
