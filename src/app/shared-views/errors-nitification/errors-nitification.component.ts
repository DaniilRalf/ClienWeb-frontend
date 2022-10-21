import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-nitification',
  templateUrl: './errors-nitification.component.html',
  styleUrls: ['./errors-nitification.component.scss']
})
export class ErrorsNitificationComponent implements OnInit {
  @Input() errors: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
