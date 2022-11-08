import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationLoginService {

  constructor(public http: HttpClient, public apiCall: ApiCallService) { }



  public organizationLogin() {
  }
}

