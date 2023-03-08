import {Component, Input, OnInit} from '@angular/core';
import {BooksContent} from "../../../../models/types/materials.interface";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book!: BooksContent

  constructor() { }

  ngOnInit(): void {
  }

}
