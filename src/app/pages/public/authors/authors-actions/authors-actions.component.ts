import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'el-authors-actions',
  templateUrl: './authors-actions.component.html',
  styleUrls: ['./authors-actions.component.scss']
})
export class AuthorsActionsComponent implements OnInit {

  @Input() public sort!: string
  @Output() sortChangedEmit = new EventEmitter<string>()
  @Output() refreshQueryParamsEmit = new EventEmitter<void>()

  constructor() {
  }

  ngOnInit(): void {
  }

  public sortChanged(): void {
    this.sortChangedEmit.emit(this.sort)
  }

  public refreshQueryParams(): void {
    this.refreshQueryParamsEmit.emit()
  }

}
