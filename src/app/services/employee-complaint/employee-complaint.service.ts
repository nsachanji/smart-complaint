import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';
import { Observable } from 'rxjs';
import { Organisation } from '../../interfaces/organisation';

@Injectable({
  providedIn: 'root'
})
export class EmployeeComplaintService {

  constructor(public http: HttpClient, public apiCall: ApiCallService) { }

  public registerComplaint(
    data: {
      subject: string,
      description: number,
    }) {
    // return this.http.post(this.apiCall.apiUrl('/organisation'), data);
  }
}
