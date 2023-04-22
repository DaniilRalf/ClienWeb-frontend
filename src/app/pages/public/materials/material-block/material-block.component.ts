import {Component, Input, OnInit} from '@angular/core'
import {BooksCoursesContent} from "../../../../models/types/materials.interface"
import {environment} from "../../../../../environments/environment"
import {HttpService} from "../../../../helpers/services/http.service";
import {take} from "rxjs";
import {MaterialsService} from "../materials.service";

@Component({
  selector: 'el-material-block',
  templateUrl: './material-block.component.html',
  styleUrls: ['./material-block.component.scss']
})
export class MaterialBlockComponent implements OnInit {

  public env = environment

  @Input() public material!: BooksCoursesContent

  @Input() public page!: string

  constructor(
    private httpService: HttpService,
    private materialService: MaterialsService,
  ) {
  }

  ngOnInit(): void {
  }

  public onReaction(event: 'like' | 'dislike'): void {
    const buffer = this.materialService.onReaction(this.material, event)
    this.material = buffer.material
    this.httpService.addReaction(buffer.eventData).pipe(take(1)).subscribe()
  }

}
