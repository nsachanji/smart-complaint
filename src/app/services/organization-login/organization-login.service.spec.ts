import { TestBed } from '@angular/core/testing';

import { OrganizationLoginService } from './organization-login.service';

describe('OrganizationLoginService', () => {
  let service: OrganizationLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
