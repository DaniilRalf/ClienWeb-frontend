import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {PublicComponent} from "./pages/public/public/public.component"
import {PersonalComponent} from "./pages/personal/personal/personal.component"
import {PersonalMyPageComponent} from "./pages/personal/personal-my-page/personal-my-page.component"
import {PersonalAddMaterialsComponent} from "./pages/personal/personal-add-materials/personal-add-materials.component"
import {BooksComponent} from "./pages/public/books/books.component"
import {CoursesComponent} from "./pages/public/cources/courses.component"
import {PublicInfoComponent} from "./pages/public/public-info/public-info.component"
import {BookItemPageComponent} from "./pages/public/books/book-item-page/book-item-page.component"
import {AuthorizationGuard} from "./helpers/authorization.guard"
import {CourseItemPageComponent} from "./pages/public/cources/course-item-page/course-item-page.component"

const routes: Routes = [

  {
    path: '',
    component: PublicComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {
        path: 'main',
        component: PublicInfoComponent,
        children: []
      },
      {
        path: 'books',
        component: BooksComponent,
        children: []
      },
      {
        path: 'books/:id',
        component: BookItemPageComponent,
        children: []
      },
      {
        path: 'courses',
        component: CoursesComponent,
        children: []
      },
      {
        path: 'courses/:id',
        component: CourseItemPageComponent,
        children: []
      },
    ]
  },

  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {path: '', redirectTo: 'my-page', pathMatch: 'full'},
      {
        path: 'my-page',
        component: PersonalMyPageComponent,
        children: []
      },
      {
        path: 'add',
        component: PersonalAddMaterialsComponent,
        children: [],
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
