import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-layout-routing.module';
import { PanelComponent } from './panel/panel.component';
import { SharedViewModule } from '../shared-views/shared-views.module';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';
import { SetupComponent } from './setup/setup.component';



@NgModule({
  declarations: [
    PanelComponent,
    InfoComponent,
    MenuComponent,
    SetupComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    SharedViewModule,
  ],
})
export class AdminLayoutModule { }
