import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';
import { Observable } from 'rxjs';
import { OrganisationLogin } from '../../interfaces/organisation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeComplaintService {

  constructor(public http: HttpClient, public apiCall: ApiCallService) { }

  public registerComplaint(
    data: {
      complaint_subject: string,
      complaint_statement: number,
    }): Observable<OrganisationLogin> {
    return this.http.post<OrganisationLogin>(this.apiCall.apiUrl('organisation'), data);
  }
}