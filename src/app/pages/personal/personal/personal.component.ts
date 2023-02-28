import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  private getUserData(): void {
    this.httpService.getUserData()
      //TODO types
      .subscribe((userData: any) => {
        console.log(userData)
      })
  }

}
