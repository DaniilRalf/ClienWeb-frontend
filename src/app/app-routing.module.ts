import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainComponent} from "./pages/public/main/main.component";

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
    component: AppComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
