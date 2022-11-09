import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { OptionComponent } from './option/option.component';
import { RegisterComponent } from './register/register.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { TrackComplaintComponent, DialogContentDialog } from './track-complaint/track-complaint.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    EmployeeLoginComponent,
    OptionComponent,
    RegisterComponent,
    RegisterComplaintComponent,
    TrackComplaintComponent,
    DialogContentDialog
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class EmployeeModule { }
