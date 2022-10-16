import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class BaseService{
  protected entityUrlName?: string;

  constructor(protected http: HttpClient) { }


  getAll() {
    return this
        .http
        .get(environment.apiBaseUrl + this.entityUrlName);
  }

  create(data: any) {
      return this
          .http
          .post(environment.apiBaseUrl + this.entityUrlName, data);
  }





  logout() {
    return this
        .http
        .get(environment.apiBaseUrl + '/api/logout');
  }

  loginRregistration(data: any) {
    return this
        .http
        .post(environment.apiBaseUrl + this.entityUrlName, data);
  }
}
