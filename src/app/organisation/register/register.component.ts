import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationRegisterService } from '../../services/organization-register/organization-register.service';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ContainsError, ValidationError } from '../../error-message/validation-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, ContainsError {
  /**
   * Register form group
   */
  public registerForm: UntypedFormGroup;

  /**
   * to show or hide password
   */
  public passwordVisibility: boolean = false;

  validationErrors: ValidationError = {};


  constructor(
    public registerOrganisationService: OrganizationRegisterService,
    private route: Router,
  ) {
    this.registerForm = new UntypedFormGroup({});
  }

  ngOnInit(): void {
    this.setupOrganisationRegisterForm();
  }

  /**
   * setup user register form
   * @protected
   */
  protected setupOrganisationRegisterForm(): void {
    this.registerForm.addControl(
      'name',
      new UntypedFormControl('', [Validators.required]),
    );
    this.registerForm.addControl(
      'organization_id',
      new UntypedFormControl('', [Validators.required]),
    );
    this.registerForm.addControl(
      'contact_number',
      new UntypedFormControl('', [Validators.required]),
    );
    this.registerForm.addControl(
      'address',
      new UntypedFormControl('', [Validators.required]),
    );
    this.registerForm.addControl(
      'pin_code',
      new UntypedFormControl('', [Validators.required]),
    );
    this.registerForm.addControl(
      'password',
      new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
    );
    this.registerForm.addControl(
      'confirm_password',
      new UntypedFormControl('', [
        Validators.required,
        this.confirmPasswordValidator(
          this.registerForm.get('password') as UntypedFormControl,
        ),
      ]),
    );
  }

  /**
   * Validates that the password and confirm password are equal
   * @param passwordControl
   * @protected
   */
  protected confirmPasswordValidator(
    passwordControl: AbstractControl,
  ): ValidatorFn {
    let isSubscribed = false;
    return (control: AbstractControl) => {
      if (!isSubscribed) {
        isSubscribed = true;
        passwordControl.valueChanges.subscribe(() =>
          control.updateValueAndValidity(),
        );
      }

      return passwordControl.value !== control.value && control.value !== ''
        ? { confirmPassword: true }
        : null;
    };
  }

  public registerOrganisation(){
    return this.registerOrganisationService.registerOrganisation(
      this.registerForm.getRawValue()
    ).subscribe((data) => console.log(data, 'data') )
  }

  loginRoute() {
    this.route.navigateByUrl('/organisation/login')
  }

}
