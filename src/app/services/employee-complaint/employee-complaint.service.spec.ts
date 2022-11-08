import { TestBed } from '@angular/core/testing';

import { EmployeeComplaintService } from './employee-complaint.service';

describe('EmployeeComplaintService', () => {
  let service: EmployeeComplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeComplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
