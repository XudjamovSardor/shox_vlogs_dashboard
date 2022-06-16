import { TestBed } from '@angular/core/testing';

import { ReklamaService } from './reklama.service';

describe('ReklamaService', () => {
  let service: ReklamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReklamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
