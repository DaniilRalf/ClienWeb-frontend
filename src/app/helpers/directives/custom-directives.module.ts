import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ShortedTextDirective} from "./shorted-text.directive"

const allDirectives = [
  ShortedTextDirective
]

@NgModule({
  declarations: [...allDirectives],
  exports: [...allDirectives],
  imports: [
    CommonModule
  ]
})
export class CustomDirectivesModule {
}
