import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';
import { Observable } from 'rxjs';
import { Organisation } from '../../interfaces/organisation';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRegisterService {

  constructor(public http: HttpClient, public apiCall: ApiCallService) { }

  /**
   * It will create a new organisation record
   * @param name
   * @param organisation_id
   * @param password
   * @param contact_number
   * @param address
   * @param pin_code
   */
  public registerOrganisation(
    data: {
      name: string,
      organisation_id: number,
      password: string,
      contact_number: number,
      address: string,
      pin_code: string,
    }): Observable<Organisation> {
    return this.http.post<Organisation>(this.apiCall.apiUrl('/organisation'), data);
  }
}
