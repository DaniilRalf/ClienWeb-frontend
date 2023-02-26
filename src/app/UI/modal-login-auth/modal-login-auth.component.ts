import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRegistrationInterface} from "../../models/types/login-registration.interface";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-login-auth',
  templateUrl: './modal-login-auth.component.html',
  styleUrls: ['./modal-login-auth.component.scss']
})
export class ModalLoginAuthComponent implements OnInit {
  public loginForm!: FormGroup
  public registrationForm!: FormGroup
  public showPassword = false

  constructor(public dialogRef: MatDialogRef<ModalLoginAuthComponent>) { }

  ngOnInit(): void {
    this.formBuild()
  }

  public changeShowPassword(event: MouseEvent): void {
    event.preventDefault()
    this.showPassword = !this.showPassword
  }

  private formBuild(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })

    this.registrationForm = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      firstname: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
    })
  }

  public onSubmit(tag: 'loginForm' | 'registrationForm'): void {
    if (this[tag].status === 'VALID') {
      const outputData: {tag: 'loginForm' | 'registrationForm', data: LoginRegistrationInterface} = {
        tag,
        data: this[tag].value
      }
      this.dialogRef.close(outputData)
    }
  }

}
