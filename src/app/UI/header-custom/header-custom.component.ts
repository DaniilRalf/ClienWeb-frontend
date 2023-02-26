import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalLoginAuthComponent} from "../modal-login-auth/modal-login-auth.component";

@Component({
  selector: 'app-header-custom',
  templateUrl: './header-custom.component.html',
  styleUrls: ['./header-custom.component.scss']
})
export class HeaderCustomComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.dialog
      .open(ModalLoginAuthComponent, {})
      .afterClosed().subscribe(result => {
        //TODO log
        console.log(result)
    })
  }

}
