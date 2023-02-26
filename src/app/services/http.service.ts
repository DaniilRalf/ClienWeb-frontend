import { Injectable } from '@angular/core';
import {LoginRegistrationInterface} from "../models/types/login-registration.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public login(data: LoginRegistrationInterface) {
    return this.http.post(
      environment.apiBaseUrl + 'api/auth/login', data
    )
  }

  public registration(data: LoginRegistrationInterface) {
    return this.http.post(
      environment.apiBaseUrl + 'api/registration', data
    )
  }
}
