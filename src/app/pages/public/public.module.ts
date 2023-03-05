import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicComponent } from "./public/public.component"
import {MatIconModule} from "@angular/material/icon";
import { BooksComponent } from './books/books.component';
import { CoursesComponent } from './cources/courses.component';
import {RouterModule} from "@angular/router";
import { PublicInfoComponent } from './public-info/public-info.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../helpers/auth.interceptor";

const allComponents = [
  PublicComponent,
  BooksComponent,
  CoursesComponent,
  PublicInfoComponent,
]

@NgModule({
  declarations: [ ...allComponents ],
  exports: [ ...allComponents ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class PublicModule { }
