import { TestBed } from '@angular/core/testing';

import { OnlineYangiliklarServiceService } from './online-yangiliklar-service.service';

describe('OnlineYangiliklarServiceService', () => {
  let service: OnlineYangiliklarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineYangiliklarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
