import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getLocalStorageItem(key: string) {
    return localStorage.getItem(key)
  }

  public setLocalStorageItem(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  public removeLocalStorageItem(key: string) {
    return localStorage.removeItem(key)
  }
}
