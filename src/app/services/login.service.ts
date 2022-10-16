import { Injectable } from '@angular/core';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  protected override entityUrlName = 'api/auth/login';
}
