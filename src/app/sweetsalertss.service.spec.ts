import { TestBed } from '@angular/core/testing';

import { SweetsalertssService } from './sweetsalertss.service';

describe('SweetsalertssService', () => {
  let service: SweetsalertssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetsalertssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
