import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'}, 
  {
      path: 'main',
      component: MainComponent,
      children: [
        {
          path: 'auth',
          component: AuthenticationComponent,
          children: []
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule{}