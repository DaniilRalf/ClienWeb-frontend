import { Injectable } from '@angular/core'
import { LoginRegistrationInterface } from "../models/types/login-registration.interface"
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment"
import {AddBooksInterface, BooksContent, InputDataBooks, QueryParams} from "../models/types/materials.interface";
import {LocalStorageService} from "./local-storage.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  /* ? USER -------------------------------------------------*/
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
  /* ? USER -------------------------------------------------*/

  /* ? MATERIALS --------------------------------------------*/
    //TODO types
    public addBook(data: any): any {
      return this.http.post(
        environment.apiBaseUrl + 'api/item/save', data
      )
    }
    public getAllBooks(queryParams: any): Observable<InputDataBooks> {
      return this.http.get<InputDataBooks>(
        environment.apiBaseUrl + `api/item${this.generateQueryParams(queryParams)}`
      )
    }
    public getItemBook(id: number): Observable<BooksContent> {
      return this.http.get<BooksContent>(
        environment.apiBaseUrl + `api/item/${id}`
      )
    }
    //TODO types
    public addPhoto(data: FormData): Observable<any> {
      return this.http.post<any>(
        environment.apiBaseUrl + 'api/image/file', data
      )
    }
  /* ? MATERIALS --------------------------------------------*/


  public saveInLKQueryParam(key: string, queryParams: QueryParams): void {
    this.localStorageService.setLocalStorageItem(key, queryParams)
  }
  private generateQueryParams(queryParams: QueryParams): string {
    let index = 0,
        finalQueryParams = ''
    for (let [key, value] of Object.entries(queryParams)) {
      if (key && index === 0) {
        finalQueryParams += `?${key}=${value}`
      }
      if (key && index > 0) {
        finalQueryParams += `&${key}=${value}`
      }
      index++
    }
    return finalQueryParams
  }
}
