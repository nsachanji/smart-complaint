import { Component, Input } from '@angular/core';
import { AbstractControl, UntypedFormControl } from '@angular/forms';
import { ErrorKeysMap } from '../../error-keys-map';

@Component({
  selector: 'error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss'],
})
export class ErrorInputComponent {
  @Input()
  public control: AbstractControl | null = null;

  /**
   * Local level instances
   * @protected
   */
  protected formControl: AbstractControl = new UntypedFormControl();

  @Input()
  public only: string[] = [];

  constructor() {}

  /**
   * Returns the first error message mapped to control
   * @todo optimize
   */
  public get errorMessage(): string {
    if (!this.control) {
      return '';
    }

    const keys =
      this.control.errors !== null ? Object.keys(this.control.errors) : [];

    const errors = this.control.errors;

    if (errors === null) {
      return '';
    }

    for (const errorKey of keys) {
      switch (errorKey) {
        case ErrorKeysMap.Required:
          return 'The field is required';

        case ErrorKeysMap.Min:
          return `The field can only have a minimum value of ${
            errors[ErrorKeysMap.Min].min
          }`;

        case ErrorKeysMap.MinLength:
          return `The filed must be at least ${
            errors[ErrorKeysMap.MinLength].requiredLength
          } characters`;

        case ErrorKeysMap.Max:
          return `The field can only have maximum value of ${
            errors[ErrorKeysMap.Max].max
          }`;

        case ErrorKeysMap.MaxLength:
          return `The field can only have maximum ${
            errors[ErrorKeysMap.MaxLength].requiredLength
          } characters`;

        case ErrorKeysMap.Email:
          return `The email is not a valid email format`;

        case ErrorKeysMap.Pattern:
          return `The input pattern provided is invalid`;

        case ErrorKeysMap.MinimumButtonAction:
          return `The Actions minimum requirement is not met`;

        case ErrorKeysMap.MaximumButtonAction:
          return `The Actions are exceeded the maximum allowed`;

        case ErrorKeysMap.WhiteSpace:
          return `The white space not allowed`;

        case ErrorKeysMap.MinResponse:
          return `The Response minimum requirement is not met`;
        case ErrorKeysMap.InvalidMedia:
          return `The selected media file not match with selected type`;
      }
    }

    return 'The field has incorrect value';
  }

  public get skip(): boolean {
    if (!this.control) {
      return false;
    }

    const keys =
      this.control.errors !== null ? Object.keys(this.control.errors) : [];

    if (this.only.length === 0) {
      return false;
    }

    for (const errorKey of keys) {
      if (this.only.includes(errorKey)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Returns true if control is both (invalid, touch) and skipped
   * @todo Needs optimization
   */
  public get hasError(): boolean {
    return !!this.control?.invalid && !!this.control?.touched && !this.skip;
  }
}
