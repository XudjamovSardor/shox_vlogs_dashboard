import { TestBed } from '@angular/core/testing';

import { ShowBiznesServiceService } from './show-biznes-service.service';

describe('ShowBiznesServiceService', () => {
  let service: ShowBiznesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowBiznesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
