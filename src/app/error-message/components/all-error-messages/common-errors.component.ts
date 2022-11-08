import { Component, Input, OnInit } from '@angular/core';
import { ContainsError, ValidationError } from '../../validation-error';

@Component({
  selector: 'app-common-errors',
  templateUrl: './common-errors.component.html',
  styleUrls: ['./common-errors.component.scss'],
})
export class CommonErrorsComponent implements ContainsError {
  @Input()
  public validationErrors!: ValidationError;

  @Input()
  public customErrors: string[] = [];

  constructor() {}

  /**
   * All Errors
   */
  public get errors(): string[] {
    let errors: string[] = [];

    for (const errorKey in this.validationErrors) {
      if (this.validationErrors.hasOwnProperty(errorKey)) {
        errors = errors.concat(this.validationErrors[errorKey]);
      }
    }

    return errors;
  }
}
