import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TokenCookiesService } from 'src/app/services/token-cookies.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  openForm = 'login';
  loginForm!: FormGroup;
  registrationForm!: FormGroup;


  constructor(
    private RegistrationService: RegistrationService,
    private LoginService: LoginService,
    private TokenCookieService: TokenCookiesService,
  ) { }

  ngOnInit(): void {
    this.formBuildLogin();
    this.formBuildRegist();
  }

  public formBuildLogin(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
          Validators.required,
      ]),
      password: new FormControl('', [
          Validators.required,
      ]),
    });
  }

  public formBuildRegist(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('',[
          Validators.required,
      ]),
      password: new FormControl('', [
          Validators.required,
      ]),
      firstname: new FormControl('', [
          Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
    });
  }

  public onSubmitLogin(): void {
    console.dir(this.loginForm.value);

    // this.TokenCookieService.setCookie()
    // console.log(this.TokenCookieService.getCookie());
    

    this.LoginService.loginRregistration(this.loginForm.value)
                            .subscribe((i: any) => {
                              console.log(i);
                              if(true){
                                this.TokenCookieService.setCookie()
                              } else{
                                console.log('fghf');
                              }
                            })
  }

  public onSubmitRegist(): void {
    console.dir(this.registrationForm.value);
    

    // this.RegistrationService.loginRregistration(this.registrationForm.value)
    //                         .subscribe(i => {
    //                           console.log(i);
    //                         })
  }

  public clickLogin(): void {
    this.openForm = 'login';   
  }

  public clickRegistration(): void {
    this.openForm = 'registration';
  }

}
