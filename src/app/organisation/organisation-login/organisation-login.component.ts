import { Component, OnInit } from '@angular/core';
import { ContainsError, ValidationError } from '../../error-message/validation-error';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationLoginService } from '../../services/organization-login/organization-login.service'

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
    public organizationLoginService: OrganizationLoginService,
  ) {
    this.loginForm = new UntypedFormGroup({});
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  protected setUpLoginForm(): void {
    this.loginForm.addControl(
      'organisation_id',
      new UntypedFormControl('', [Validators.required]),
    );
    this.loginForm.addControl(
      'password',
      new UntypedFormControl('', [Validators.required]),
    );
  }

  loginFormSubmit() {
    console.log(this.loginForm.getRawValue())
    return this.organizationLoginService.organizationLogin(
      this.loginForm.getRawValue()
    ).subscribe((data) => {
      console.log(data, 'data')
    })
  }

  registerSubmit() {
    this.route.navigateByUrl('/organisation/register')
  }
}
