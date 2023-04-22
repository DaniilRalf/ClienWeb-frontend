import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'el-materials-actions',
  templateUrl: './materials-actions.component.html',
  styleUrls: ['./materials-actions.component.scss']
})
export class MaterialsActionsComponent implements OnInit {

  @Input() public sort!: string
  @Output() sortChangedEmit = new EventEmitter<string>()
  @Output() refreshQueryParamsEmit = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  public sortChanged(): void {
    this.sortChangedEmit.emit(this.sort)
  }

  public refreshQueryParams(): void {
    this.refreshQueryParamsEmit.emit()
  }

}
