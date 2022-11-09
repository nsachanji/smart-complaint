import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeModule } from './employee/employee.module';
import { OrganisationModule } from './organisation/organisation.module';
import { OrganisationLoginComponent } from './organisation/organisation-login/organisation-login.component';
import { OptionComponent } from './employee/option/option.component';
import { RegisterComplaintComponent } from './employee/register-complaint/register-complaint.component';
import { RegisterComponent } from './employee/register/register.component';
import {RegisterComponent as OrganisationRegisterComponent} from './organisation/register/register.component'
import { TrackComplaintComponent } from './employee/track-complaint/track-complaint.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'employee/login', component: EmployeeLoginComponent},
  {path: 'organisation/login', component: OrganisationLoginComponent},
  {path: 'employee/option', component: OptionComponent},
  {path: 'employee/option/complaint', component: RegisterComplaintComponent},
  {path: 'employee/option/tracking', component: TrackComplaintComponent},
  {path: 'employee/register', component: RegisterComponent},
  {path: 'organisation/register', component: OrganisationRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule, EmployeeModule, OrganisationModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
