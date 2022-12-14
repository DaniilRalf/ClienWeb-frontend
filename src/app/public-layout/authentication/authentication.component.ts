import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { StorageService } from 'src/app/services/storage.service';
import {ProfileService} from "../../services/profile.service";
import {UserInterface} from "../../models/user";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  openForm = 'login';
  loginForm!: FormGroup;
  registrationForm!: FormGroup;
  arrErrors: any[] = [];


  constructor(
    private RegistrationService: RegistrationService,
    private LoginService: LoginService,
    private StorageService: StorageService,
    private ProfileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.StorageService.token){
      this.router.navigate(['/main', 'review']);
    }
    this.formBuildLogin();
    this.formBuildRegist();
  }

  public formBuildLogin(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
      ]),
      password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
      ]),
    });
  }

  public formBuildRegist(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('test2',[
          Validators.required,
          Validators.minLength(2),
      ]),
      password: new FormControl('test2', [
          Validators.required,
          Validators.minLength(5),
      ]),
      firstname: new FormControl('test2', [
          Validators.required,
          Validators.minLength(2),
      ]),
      lastname: new FormControl('test2', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('test2@test2.com', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  public onSubmitLogin(): void {
    this.LoginService.loginRregistration(this.loginForm.value)
                            .subscribe((i:any) => {

                              console.log(i);
                              if(i.token && i.role){
                                this.StorageService.setUser(i);
                                this.router.navigate(['/main', 'review']);
                                this.ProfileService.getAll()
                                  .subscribe((item: UserInterface) => {
                                    this.StorageService.USER = item;

                                    console.log(this.StorageService.USER)
                                  })
                              }
                            })
    this.arrErrors = [];
    this.getFormValidationErrors('login');
  }

  public onSubmitRegist(): void {
    this.RegistrationService.loginRregistration(this.registrationForm.value)
                            .subscribe((i:any) => {

                              console.log(i);
                              if(i.token && i.role){
                                this.StorageService.setUser(i);
                                this.router.navigate(['/main', 'review']);
                                this.ProfileService.getAll()
                                  .subscribe((item: UserInterface) => {
                                    this.StorageService.USER = item;

                                    console.log(this.StorageService.USER)
                                  })
                              }
                            })
    this.arrErrors = [];
    this.getFormValidationErrors('registration');
  }

  public clickLogin(): void {
    this.openForm = 'login';
  }

  public clickRegistration(): void {
    this.openForm = 'registration';
  }


  getFormValidationErrors(form: string) {
    let nowForm: any;
    if(form === 'registration'){
      nowForm = this.registrationForm;
    }
    if(form === 'login'){
      nowForm = this.loginForm;
    }
    Object.keys(nowForm.controls).forEach(key => {
      const controlErrors: any = nowForm?.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
        this.arrErrors.push({'key': key, 'error': keyError, 'detail': controlErrors[keyError]})
        });
      }
    });
  }
}
