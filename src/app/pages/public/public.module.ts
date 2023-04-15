import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PublicComponent} from "./public/public.component"
import {MatIconModule} from "@angular/material/icon"
import {BooksComponent} from './books/books.component'
import {CoursesComponent} from './cources/courses.component'
import {RouterModule} from "@angular/router"
import {InfoComponent} from './info/info.component'
import {MatPaginatorModule} from "@angular/material/paginator"
import {BookItemComponent} from './books/book-item/book-item.component'
import {BookItemPageComponent} from './books/book-item-page/book-item-page.component'
import {CourseItemComponent} from './cources/course-item/course-item.component'
import {MatSelectModule} from "@angular/material/select"
import {CourseItemPageComponent} from './cources/course-item-page/course-item-page.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorItemComponent } from './authors/author-item/author-item.component';
import { AuthorItemPageComponent } from './authors/author-item-page/author-item-page.component'

const allComponents = [
  PublicComponent,
  BooksComponent,
  CoursesComponent,
  InfoComponent,
  BookItemComponent,
  BookItemPageComponent,
  CourseItemComponent,
  CourseItemPageComponent,
  AuthorsComponent,
]

@NgModule({
  declarations: [...allComponents, AuthorItemComponent, AuthorItemPageComponent],
  exports: [...allComponents],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: []
})
export class PublicModule {
}
