import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }

  /**
   * Returns base url
   */
  public baseUrl(): string {
    return environment.urlSettings.baseUrl;
  }

  /**
   * Returns url mapped to base url
   * @param url
   */
  public url(url: string): string {
    return `${this.baseUrl()}/${url}`;
  }

  /**
   * Returns api url
   * @param url
   */
  public apiUrl(url: string): string {
    return this.url(`${url}`);
  }


}
