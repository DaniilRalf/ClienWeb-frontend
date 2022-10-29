import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PanelComponent } from './panel/panel.component';
import {AdminRouteGuard} from "../helpers/admin-route.guard";

const routes: Routes = [
  {path: 'admin/panel', redirectTo: 'admin/panel/info', pathMatch: 'full'},
  {
      path: 'admin/panel',
      component: PanelComponent,
      canActivate: [AdminRouteGuard],
      children: [
        {
          path: 'info',
          component: InfoComponent,
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
