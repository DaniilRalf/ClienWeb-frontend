import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {BooksCoursesContent} from "../../../../models/types/materials.interface";

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {

  public env = environment

  // TODO types
  @Input() public author!: any

  constructor() { }

  ngOnInit(): void {
  }

}
