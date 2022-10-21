import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private StorageService: StorageService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.checkAuth();
  }

  public checkAuth(): void{
    this.StorageService.getUser();
  }

}
