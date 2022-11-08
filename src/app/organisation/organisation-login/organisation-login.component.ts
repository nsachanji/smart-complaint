import { Component, OnInit } from '@angular/core';
import { ContainsError, ValidationError } from '../../error-message/validation-error';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisation-login',
  templateUrl: './organisation-login.component.html',
  styleUrls: ['./organisation-login.component.css']
})
export class OrganisationLoginComponent implements OnInit, ContainsError {
  validationErrors: ValidationError = {};

  /**
   * Login form group
   */
  public loginForm: UntypedFormGroup;
  constructor(
    private route: Router,
  ) {
    this.loginForm = new UntypedFormGroup({});
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
  }

  registerSubmit() {
    this.route.navigateByUrl('/organisation/register')
  }



}
