import {Component, Input, OnInit} from '@angular/core';
import {PreloaderTypesEnum} from "../../models/enum/preloader-types.enum";

@Component({
  selector: 'el-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  public PreloaderTypesEnum =  PreloaderTypesEnum

  public quantityVersion_1: string[] = []

  @Input() public typePreloader?: PreloaderTypesEnum

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= 20; i++) {
      this.quantityVersion_1.push('')
    }
  }

}
