import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/public/main/main.component";
import {PersonalComponent} from "./pages/personal/personal/personal.component";

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
        {
          path: 'books',
          component: MainComponent,
          children: []
        },
    ]
  },

  {
    path: 'personal',
    component: PersonalComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
