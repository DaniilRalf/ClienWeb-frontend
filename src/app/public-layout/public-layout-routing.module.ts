import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainComponent } from './main/main.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: '', redirectTo: 'main/review', pathMatch: 'full'}, 
  {
      path: 'main',
      component: MainComponent,
      children: [
        {
          path: 'auth',
          component: AuthenticationComponent,
          children: []
        },
        {
          path: 'review',
          component: ReviewComponent,
          children: []
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule{}