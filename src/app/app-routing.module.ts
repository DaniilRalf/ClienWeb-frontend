import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./pages/public/main/main.component";
import { PersonalComponent } from "./pages/personal/personal/personal.component";
import { PersonalMyPageComponent } from "./pages/personal/personal-my-page/personal-my-page.component";
import { PersonalAddMaterialsComponent } from "./pages/personal/personal-add-materials/personal-add-materials.component";

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
export class AppRoutingModule { }
