import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(
    private StorageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.StorageService.getUser();
  }

}
