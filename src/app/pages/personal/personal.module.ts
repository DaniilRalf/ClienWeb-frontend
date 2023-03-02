import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalComponent} from "./personal/personal.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../helpers/auth.interceptor";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import { PersonalMyPageComponent } from './personal-my-page/personal-my-page.component';
import { PersonalAddMaterialsComponent } from './personal-add-materials/personal-add-materials.component';

const allComponents = [
  PersonalComponent,
  PersonalMyPageComponent,
  PersonalAddMaterialsComponent,
]

@NgModule({
  declarations: [...allComponents],
  exports: [...allComponents],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class PersonalModule { }
