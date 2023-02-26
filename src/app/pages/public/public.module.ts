import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainComponent } from "./main/main.component"

const allComponents = [
  MainComponent,
]

@NgModule({
  declarations: [ ...allComponents ],
  exports: [ ...allComponents ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
