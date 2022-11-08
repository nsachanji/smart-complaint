import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInputComponent } from './error-input.component';
import { UntypedFormControl, Validators } from '@angular/forms';

describe('ErrorInputComponent', () => {
  let component: ErrorInputComponent;
  let fixture: ComponentFixture<ErrorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty string when control is null', () => {
    expect(component.errorMessage).toEqual('');
  });

  it('should return empty string when no error is present', () => {
    component.control = new UntypedFormControl();

    expect(component.errorMessage).toEqual('');
  });

  it('should return error message when required error message is mapped', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    component.control.updateValueAndValidity();

    expect(component.errorMessage).toEqual('The field is required');
  });

  it('should return default message when mapped error is not present', () => {
    component.control = new UntypedFormControl('', [() => ({ fail: true })]);
    component.control.updateValueAndValidity();

    expect(component.errorMessage).toEqual('The field has incorrect value');
  });

  it('should not skip when control is not initialized', () => {
    expect(component.skip).toEqual(false);
  });

  it('should not skip when control is initialized but skip array is empty', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    expect(component.skip).toEqual(false);
  });

  it('should skip when control is initialized but skip array does not contain key', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    component.only = ['test'];
    expect(component.skip).toEqual(true);
  });

  it('should not skip when control is initialized but skip array does contain key', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    component.only = ['required'];
    expect(component.skip).toEqual(false);
  });

  it('should return false when control is not defined', () => {
    expect(component.hasError).toEqual(false);
  });

  it('should return false when control has no errors', () => {
    component.control = new UntypedFormControl('');
    expect(component.hasError).toEqual(false);
  });

  it('should return false when control has errors but is still un touched', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    expect(component.hasError).toEqual(false);
  });

  it('should return true when control has errors touched but not skipped', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    component.control.markAllAsTouched();
    expect(component.hasError).toEqual(true);
  });

  it('should return false when control has errors touched but skipped', () => {
    component.control = new UntypedFormControl('', [Validators.required]);
    component.only = ['sample'];
    component.control.markAllAsTouched();
    expect(component.hasError).toEqual(false);
  });
});
