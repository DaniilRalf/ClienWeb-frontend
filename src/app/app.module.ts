import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PublicModule } from "./pages/public/public.module"
import { UiModule } from "./UI/ui.module"
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { PersonalModule } from "./pages/personal/personal.module"
import { MainInterceptor } from "./helpers/main.interceptor"

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,

        PublicModule,
        PersonalModule,
        UiModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
