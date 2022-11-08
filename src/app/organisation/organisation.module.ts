import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganisationLoginComponent } from './organisation-login/organisation-login.component';



@NgModule({
  declarations: [
    RegisterComponent, OrganisationLoginComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    ReactiveFormsModule,
  ]
})
export class OrganisationModule { }
