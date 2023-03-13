import { Component, OnInit } from '@angular/core';
import {AddBooksCoursesInterface} from "../../../models/types/materials.interface";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-personal-add-materials',
  templateUrl: './personal-add-materials.component.html',
  styleUrls: ['./personal-add-materials.component.scss']
})
export class PersonalAddMaterialsComponent implements OnInit {

  public savingBookFile?: {id: number, name: string}

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  public bookDataEmit(event: AddBooksCoursesInterface): void {
    this.httpService.addBook(event)
      //TODO types
      .subscribe((res: any) => {
        //TODO delete
        console.log(res)
      }), (err: any) => {
        //TODO add handler error
      }
  }

  public bookFileEmit(event: FormData): void {
    this.httpService.addPhoto(event)
      //TODO types
      .subscribe((item: any) => {
        //TODO create forEach at element
        this.savingBookFile = item[0]
      }), (err: any) => {
      //TODO add handler error
    }
  }


}
