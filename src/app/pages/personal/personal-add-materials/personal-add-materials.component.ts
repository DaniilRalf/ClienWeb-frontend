import { Component, OnInit } from '@angular/core';
import {AddBooksInterface} from "../../../models/types/materials.interface";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-personal-add-materials',
  templateUrl: './personal-add-materials.component.html',
  styleUrls: ['./personal-add-materials.component.scss']
})
export class PersonalAddMaterialsComponent implements OnInit {

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  public bookDataEmit(event: AddBooksInterface) {
    this.httpService.addBook(event)
      //TODO types
      .subscribe((res: any) => {
        //TODO delete
        console.log(res)
      }), (err: any) => {
        //TODO add handler error
      }
  }


}
