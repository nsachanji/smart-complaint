import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ContainsError, ValidationError } from '../../error-message/validation-error';

@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.css']
})
export class RegisterComplaintComponent implements OnInit, ContainsError {
  validationErrors: ValidationError = {};

  /**
   * Login form group
   */
  public complaintForm: UntypedFormGroup;

  constructor(public route: Router) {
    this.complaintForm = new UntypedFormGroup({})
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  protected setUpLoginForm(): void {
    this.complaintForm.addControl(
      'subject',
      new UntypedFormControl('', [Validators.required]),
    );
    this.complaintForm.addControl(
      'description',
      new UntypedFormControl('', [Validators.required]),
    );
  }

  fileComplaint() {
    console.log(this.complaintForm.getRawValue())
  }

}
