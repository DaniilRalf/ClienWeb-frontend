import {Injectable} from '@angular/core'
import {LoginRegistrationInterface} from "../models/types/login-registration.interface"
import {HttpClient} from "@angular/common/http"
import {environment} from "../../environments/environment"
import {BooksCoursesContent, InputDataBooksCourses, QueryParams} from "../models/types/materials.interface"
import {LocalStorageService} from "./local-storage.service"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
  }

  /* ? USER -------------------------------------------------*/

  //TODO types
  public login(data: LoginRegistrationInterface): any {
    return this.http.post(
      environment.apiBaseUrl + 'api/user/login', data
    )
  }

  //TODO types
  public registration(data: LoginRegistrationInterface): any {
    return this.http.post(
      environment.apiBaseUrl + 'api/user/registration', data
    )
  }

  //TODO types
  public getUserData(id: number): any {
    return this.http.get(
      environment.apiBaseUrl + `api/user/profile/${id}`
    )
  }

  /* ? USER -------------------------------------------------*/

  /* ? MATERIALS --------------------------------------------*/

  //TODO types
  public addBookOrCourse(data: any): any {
    return this.http.post(
      environment.apiBaseUrl + 'api/item/save', data
    )
  }

  //TODO types
  public addAuthor(data: any): any {
    return this.http.post(
      environment.apiBaseUrl + 'api/author/save', data
    )
  }

  public getAllBooksCourses(queryParams: any): Observable<InputDataBooksCourses> {
    return this.http.get<InputDataBooksCourses>(
      environment.apiBaseUrl + `api/item${this.generateQueryParams(queryParams)}`
    )
  }

  public getItemBookCourse(id: number): Observable<BooksCoursesContent> {
    return this.http.get<BooksCoursesContent>(
      environment.apiBaseUrl + `api/item/${id}`
    )
  }

  // TODO types
  public getAllAuthors(queryParams: any): Observable<any> {
    return this.http.get<any>(
      environment.apiBaseUrl + `api/author${this.generateQueryParams(queryParams)}`
    )
  }

  // TODO types
  public getItemAuthor(id: number): Observable<any> {
    return this.http.get<any>(
      environment.apiBaseUrl + `api/author/${id}`
    )
  }

  public addPhoto(data: FormData): Observable<{ id: number, name: string }> {
    return this.http.post<{ id: number, name: string }>(
      environment.apiBaseUrl + 'api/image/file', data
    )
  }

  /* ? MATERIALS --------------------------------------------*/


  public saveInLSQueryParam(key: string, queryParams: QueryParams): void {
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
