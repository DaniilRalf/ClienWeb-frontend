import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalComponent} from "./personal/personal.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../helpers/auth.interceptor";

const allComponents = [
  PersonalComponent,
]

@NgModule({
  declarations: [...allComponents],
  exports: [...allComponents],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class PersonalModule { }
