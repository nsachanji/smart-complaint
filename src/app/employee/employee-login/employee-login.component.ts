import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContainsError, ValidationError } from '../../error-message/validation-error';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit, ContainsError {
  validationErrors: ValidationError = {};

  /**
   * Login form group
   */
  public loginForm: UntypedFormGroup;
  constructor(
    private  route: Router
  ) {
    this.loginForm = new UntypedFormGroup({})
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  protected setUpLoginForm(): void {
    this.loginForm.addControl(
      'email',
      new UntypedFormControl('', [Validators.required, Validators.email]),
    );
    this.loginForm.addControl(
      'password',
      new UntypedFormControl('', [Validators.required]),
    );
  }

  loginFormSubmit() {
    console.log(this.loginForm.getRawValue())
    this.route.navigateByUrl('/employee/option')
  }
  registerNavigate() {
    this.route.navigateByUrl('/employee/register')
  }

}
