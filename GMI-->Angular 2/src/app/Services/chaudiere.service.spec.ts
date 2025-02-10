import { TestBed } from '@angular/core/testing';

import { ChaudiereService } from './chaudiere.service';

describe('ChaudiereService', () => {
  let service: ChaudiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaudiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
