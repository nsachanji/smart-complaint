import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { OptionComponent } from './option/option.component';
import { RegisterComponent } from './register/register.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';


@NgModule({
  declarations: [
    EmployeeLoginComponent,
    OptionComponent,
    RegisterComponent,
    RegisterComplaintComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeModule { }
