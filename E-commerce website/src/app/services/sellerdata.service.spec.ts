import { TestBed } from '@angular/core/testing';

import { SellerdataService } from './sellerdata.service';

describe('SellerdataService', () => {
  let service: SellerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
