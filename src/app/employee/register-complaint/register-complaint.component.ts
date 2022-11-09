import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ContainsError, ValidationError } from '../../error-message/validation-error';
import { EmployeeComplaintService } from 'src/app/services/employee-complaint/employee-complaint.service';

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

  constructor(public route: Router,
    public employeeComplaintService: EmployeeComplaintService) {
    this.complaintForm = new UntypedFormGroup({})
  }

  ngOnInit(): void {
    this.setUpLoginForm();
  }

  protected setUpLoginForm(): void {
    this.complaintForm.addControl(
      'complaint_subject',
      new UntypedFormControl('', [Validators.required]),
    );
    this.complaintForm.addControl(
      'complaint_statement',
      new UntypedFormControl('', [Validators.required]),
    );
  }

  fileComplaint() {
    return this.employeeComplaintService.registerComplaint(
      this.complaintForm.getRawValue()
    ).subscribe((data) => console.log(data, 'data'))
  }
}
