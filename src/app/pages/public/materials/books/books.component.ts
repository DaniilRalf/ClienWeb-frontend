import { Component } from '@angular/core'
import { MaterialGeneral } from "../material-general"
import { MaterialEnum } from "../../../../models/enum/material.enum"
import {HttpService} from "../../../../helpers/services/http.service";
import {LocalStorageService} from "../../../../helpers/services/local-storage.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent extends MaterialGeneral {

  protected override queryParamKey = 'queryParamBooks'
  protected override itemType = MaterialEnum.books

  constructor(
    protected override httpService: HttpService,
    protected override localStorageService: LocalStorageService) {
    super(httpService, localStorageService)
  }

}

