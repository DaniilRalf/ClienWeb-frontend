import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderCustomComponent } from "./header-custom/header-custom.component"
import { ModalLoginAuthComponent } from './modal-login-auth/modal-login-auth.component'
import { MatDialogModule } from "@angular/material/dialog"
import { MatTabsModule } from "@angular/material/tabs"
import { ReactiveFormsModule } from "@angular/forms"
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const allComponents = [
  HeaderCustomComponent,
  ModalLoginAuthComponent,
]

@NgModule({
  declarations: [...allComponents],
  exports: [...allComponents],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class UiModule { }
