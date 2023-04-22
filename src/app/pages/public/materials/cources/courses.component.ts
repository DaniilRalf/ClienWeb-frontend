import { Component } from '@angular/core'
import { MaterialGeneral } from "../material-general"
import { MaterialEnum } from "../../../../models/enum/material.enum"
import {HttpService} from "../../../../helpers/services/http.service";
import {LocalStorageService} from "../../../../helpers/services/local-storage.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent extends MaterialGeneral{

  protected override queryParamKey = 'queryParamCourses'
  protected override itemType = MaterialEnum.courses

  constructor(
    protected override httpService: HttpService,
    protected override localStorageService: LocalStorageService) {
    super(httpService, localStorageService)
  }

}
