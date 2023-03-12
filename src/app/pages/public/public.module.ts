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
import {MatPaginatorModule} from "@angular/material/paginator";
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookItemPageComponent } from './books/book-item-page/book-item-page.component';

const allComponents = [
  PublicComponent,
  BooksComponent,
  CoursesComponent,
  PublicInfoComponent,
  BookItemComponent
]

@NgModule({
  declarations: [ ...allComponents, BookItemPageComponent ],
  exports: [ ...allComponents ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        MatPaginatorModule
    ],
  providers: []
})
export class PublicModule { }
