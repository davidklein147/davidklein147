import { TestBed } from '@angular/core/testing';

import { RepeSerService } from './repe-ser.service';

describe('RepeSerService', () => {
  let service: RepeSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepeSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
