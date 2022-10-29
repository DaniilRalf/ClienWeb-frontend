import {Component, OnInit} from '@angular/core';
import {StorageService} from "./services/storage.service";
import {ProfileService} from "./services/profile.service";
import {UserInterface} from "./models/user";
import {Observer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'clientWeb-frontend';

  constructor(
    public StorageService: StorageService,
    private ProfileService: ProfileService,
  ) {
  }

  ngOnInit(): void {
    this.StorageService.getUser();
    if (this.StorageService.token){
      this.ProfileService.getAll()
        .subscribe((item: UserInterface) => {
          this.StorageService.USER = item;

          console.log(this.StorageService.USER)
        })
    }
  }
}
