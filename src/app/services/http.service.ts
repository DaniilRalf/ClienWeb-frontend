import { Injectable } from '@angular/core';
import {LoginRegistrationInterface} from "../models/types/login-registration.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  //TODO types
  public login(data: LoginRegistrationInterface): any {
    return this.http.post(
      environment.apiBaseUrl + 'api/auth/login', data
    )
  }

  //TODO types
  public registration(data: LoginRegistrationInterface): any {
    return this.http.post(
      environment.apiBaseUrl + 'api/registration', data
    )
  }

  //TODO types
  public getUserData(): any {
    return this.http.get(
      environment.apiBaseUrl + 'api/profile'
    )
  }


}
