import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PublicComponent} from "./public/public.component"
import {MatIconModule} from "@angular/material/icon"
import {BooksComponent} from './materials/books/books.component'
import {CoursesComponent} from './materials/cources/courses.component'
import {RouterModule} from "@angular/router"
import {InfoComponent} from './info/info.component'
import {MatPaginatorModule} from "@angular/material/paginator"
import {MaterialBlockComponent} from './materials/material-block/material-block.component'
import {BookItemPageComponent} from './materials/books/book-item-page/book-item-page.component'
import {CourseItemComponent} from './materials/cources/course-item/course-item.component'
import {MatSelectModule} from "@angular/material/select"
import {CourseItemPageComponent} from './materials/cources/course-item-page/course-item-page.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorItemComponent } from './authors/author-item/author-item.component';
import { AuthorItemPageComponent } from './authors/author-item-page/author-item-page.component'
import {MatTooltipModule} from "@angular/material/tooltip";
import {CustomDirectivesModule} from "../../helpers/directives/custom-directives.module";
import {MaterialsService} from "./materials/materials.service";

const allComponents = [
  PublicComponent,
  BooksComponent,
  CoursesComponent,
  InfoComponent,
  MaterialBlockComponent,
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
        MatSelectModule,
        MatTooltipModule,
        CustomDirectivesModule
    ],
  providers: [MaterialsService]
})
export class PublicModule {
}
