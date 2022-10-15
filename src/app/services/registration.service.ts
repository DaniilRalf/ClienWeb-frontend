import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService extends BaseService {
  protected override entityUrlName = 'api/registration';
}
