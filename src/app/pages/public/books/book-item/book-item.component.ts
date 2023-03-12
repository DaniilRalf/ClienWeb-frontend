import { Component, Input, OnInit } from '@angular/core'
import { BooksContent } from "../../../../models/types/materials.interface"
import { environment } from "../../../../../environments/environment"

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  public env = environment

  @Input() public book!: BooksContent

  constructor() { }

  ngOnInit(): void { }

}
