import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {PublicComponent} from "./pages/public/public/public.component"
import {PersonalComponent} from "./pages/personal/personal/personal.component"
import {PersonalMyPageComponent} from "./pages/personal/personal-my-page/personal-my-page.component"
import {PersonalAddMaterialsComponent} from "./pages/personal/personal-add-materials/personal-add-materials.component"
import {BooksComponent} from "./pages/public/materials/books/books.component"
import {CoursesComponent} from "./pages/public/materials/cources/courses.component"
import {InfoComponent} from "./pages/public/info/info.component"
import {BookItemPageComponent} from "./pages/public/materials/books/book-item-page/book-item-page.component"
import {AuthorizationGuard} from "./helpers/guards/authorization.guard"
import {CourseItemPageComponent} from "./pages/public/materials/cources/course-item-page/course-item-page.component"
import {AuthorsComponent} from "./pages/public/authors/authors.component";
import {AuthorItemPageComponent} from "./pages/public/authors/author-item-page/author-item-page.component";

const routes: Routes = [

  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: InfoComponent, children: []},
      {path: 'books', component: BooksComponent, children: []},
      {path: 'books/:id', component: BookItemPageComponent, children: []},
      {path: 'courses', component: CoursesComponent, children: []},
      {path: 'courses/:id', component: CourseItemPageComponent, children: []},
      {path: 'authors', component: AuthorsComponent, children: []},
      {path: 'authors/:id', component: AuthorItemPageComponent, children: []},
    ]
  },

  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {path: '', redirectTo: 'my-page', pathMatch: 'full'},
      {path: 'my-page', component: PersonalMyPageComponent, children: []},
      {path: 'add', component: PersonalAddMaterialsComponent, children: [],},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
