import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {
  protected override entityUrlName = 'api/profile';


  changeMail(data: any) {
    return this
      .http
      .post(environment.apiBaseUrl + this.entityUrlName + '/change/mail', data);
  }

  changePassword(data: any) {
    return this
      .http
      .post(environment.apiBaseUrl + this.entityUrlName + '/change/password', data);
  }
}


