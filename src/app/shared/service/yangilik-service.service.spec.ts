import { TestBed } from '@angular/core/testing';

import { YangilikServiceService } from './yangilik-service.service';

describe('YangilikServiceService', () => {
  let service: YangilikServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YangilikServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
