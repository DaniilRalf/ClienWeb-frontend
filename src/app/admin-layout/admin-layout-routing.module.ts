import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PanelComponent } from './panel/panel.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  {path: 'admin/panel', redirectTo: 'admin/panel/info', pathMatch: 'full'}, 
  {
      path: 'admin/panel',
      component: PanelComponent,
      children: [
        {
          path: 'info',
          component: InfoComponent,
          children: []
        },
        {
          path: 'setup',
          component: SetupComponent,
          children: []
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{}