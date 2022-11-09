import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContainsError, ValidationError } from '../../error-message/validation-error';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { OrganizationLoginService } from 'src/app/services/organization-login/organization-login.service';
import { EmployeeLoginService } from 'src/app/services/employee-login/employee-login.service';

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
    private route: Router,
    public employeeLoginService: EmployeeLoginService,
  ) {
    this.loginForm = new UntypedFormGroup({})
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  protected setUpLoginForm(): void {
    this.loginForm.addControl(
      'username',
      new UntypedFormControl('', [Validators.required]),
    );
    this.loginForm.addControl(
      'password',
      new UntypedFormControl('', [Validators.required]),
    );
  }

  loginFormSubmit() {
    console.log(this.loginForm.getRawValue())
    this.route.navigateByUrl('/employee/option')
    return this.employeeLoginService.organizationLogin(
      this.loginForm.getRawValue()
    ).subscribe((data) => {
      console.log(data, 'data')
      this.route.navigateByUrl('/employee/option')
    })
    // console.log(this.loginForm.getRawValue())
  }
  registerNavigate() {
    this.route.navigateByUrl('/employee/register')
  }

}
