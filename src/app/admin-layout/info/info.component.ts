import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public newMail?: string = 'test33@test2.com';
  public passwordOld?: string = 'test3';
  public passwordNew?: string = 'test33';

  constructor(
    public StorageService: StorageService,
    private ProfileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  onClickChangeMAil(){
    this.ProfileService.changeMail({
      "mail": this.newMail
    })
      .subscribe((i) => {
        console.log(i);
      })
  }

  onClickChangePassword(){
    this.ProfileService.changePassword({
      "passwordOld": this.passwordOld,
      "passwordNew": this.passwordNew,
    })
      .subscribe((i) => {
        console.log(i);
      })
  }

}
