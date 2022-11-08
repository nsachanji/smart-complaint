import { TestBed } from '@angular/core/testing';

import { OrganizationRegisterService } from './organization-register.service';

describe('OrganizationRegisterService', () => {
  let service: OrganizationRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
