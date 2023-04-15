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
import { PersonalAddBooksComponent } from './personal-add-materials/personal-add-books/personal-add-books.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {AuthorizationGuard} from "../../helpers/authorization.guard";

const allComponents = [
  PersonalComponent,
  PersonalMyPageComponent,
  PersonalAddMaterialsComponent,
  PersonalAddBooksComponent
]

@NgModule({
  declarations: [...allComponents],
  exports: [...allComponents],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    AuthorizationGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ]
})
export class PersonalModule { }
