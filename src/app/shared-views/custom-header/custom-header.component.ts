import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

  constructor(
    public StorageService: StorageService,
  ) { }

  ngOnInit(): void {
  }

}
