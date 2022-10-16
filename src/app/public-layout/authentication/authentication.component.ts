import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

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
  ) { }

  ngOnInit(): void {
    this.formBuildLogin();
    this.formBuildRegist();
  }

  public formBuildLogin(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('asdv',[
          Validators.required,
      ]),
      password: new FormControl('sdv', [
          Validators.required,
      ]),
    });
  }

  public formBuildRegist(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('asdv',[
          Validators.required,
      ]),
      password: new FormControl('sdv', [
          Validators.required,
      ]),
      firstname: new FormControl('sdv', [
          Validators.required
      ]),
      lastname: new FormControl('sdv', [
        Validators.required
      ]),
      email: new FormControl('asdv', [
        Validators.required
      ]),
    });
  }

  public onSubmitLogin(): void {
    console.dir(this.loginForm.value);
    
  }

  public onSubmitRegist(): void {
    console.dir(this.registrationForm.value);
    

    this.RegistrationService.create(this.registrationForm.value)
                            .subscribe(i => {
                              console.log(i);
                            })

  }

  public clickLogin(): void {
    this.openForm = 'login';   
  }

  public clickRegistration(): void {
    this.openForm = 'registration';
  }

}
