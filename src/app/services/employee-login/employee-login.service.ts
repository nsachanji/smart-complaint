import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';
import { Observable } from 'rxjs';
import { OrganisationLogin } from '../../interfaces/organisation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLoginService {
  constructor(public http: HttpClient, public apiCall: ApiCallService) { }

  /**
   * It will create a new organisation record
   * @param userName
   * @param password
   */
  public organizationLogin(
    data: {
      userName: string,
      password: string,
    }): Observable<OrganisationLogin> {
    return this.http.post<OrganisationLogin>(this.apiCall.apiUrl('employee/login'), data);
  }
}
