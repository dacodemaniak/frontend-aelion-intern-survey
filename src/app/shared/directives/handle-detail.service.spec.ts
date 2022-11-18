import { TestBed } from '@angular/core/testing';

import { HandleDetailService } from './handle-detail.service';

describe('HandleDetailService', () => {
  let service: HandleDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
