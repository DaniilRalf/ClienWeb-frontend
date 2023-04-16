import {Component, OnInit} from '@angular/core';
import {AddBooksCoursesInterface} from "../../../models/types/materials.interface";
import {HttpService} from "../../../services/http.service";
import {MaterialEnum} from "../../../models/enum/material.enum";

@Component({
  selector: 'app-personal-add-materials',
  templateUrl: './personal-add-materials.component.html',
  styleUrls: ['./personal-add-materials.component.scss']
})
export class PersonalAddMaterialsComponent implements OnInit {

  public savingBookFile?: {id: number, name: string}

  public savingCourseFile?: {id: number, name: string}

  public savingAuthorFile?: {id: number, name: string}

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }

  // TODO переделать эту штуку сделать переиспользуемой

  public bookOrCourseEmit(event: AddBooksCoursesInterface): void {
    this.httpService.addBookOrCourse(event)
      //TODO types
      .subscribe((res: any) => {
        //TODO delete
        console.log(res)
      }), (err: any) => {
        //TODO add handler error
      }
  }

  //TODO types
  public  authorEmit(event: any): void {
    this.httpService.addAuthor(event)
      .subscribe((res: any) => {
        //TODO delete
        console.log(res)
      }), (err: any) => {
      //TODO add handler error
    }
  }

  public fileEmit(data: { event: FormData, tag: MaterialEnum }): void {
    this.httpService.addPhoto(data.event)
      //TODO types
      .subscribe((item: any) => {
        //TODO create forEach at element
        // TODO change switch-case
        if (data.tag === MaterialEnum.books) {
          this.savingBookFile = item[0]
        }
        if (data.tag === MaterialEnum.courses) {
          this.savingCourseFile = item[0]
        }
        if (data.tag === MaterialEnum.author) {
          this.savingAuthorFile = item[0]
        }
      }), (err: any) => {
      //TODO add handler error
    }
  }


}
