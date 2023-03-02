import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicComponent } from "./public/public.component"
import {MatIconModule} from "@angular/material/icon";
import { BooksComponent } from './books/books.component';
import { CoursesComponent } from './cources/courses.component';
import {RouterModule} from "@angular/router";
import { PublicInfoComponent } from './public-info/public-info.component';

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
  ]
})
export class PublicModule { }
