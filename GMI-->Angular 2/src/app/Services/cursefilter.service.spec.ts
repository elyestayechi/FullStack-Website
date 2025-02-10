import { TestBed } from '@angular/core/testing';

import { CursefilterService } from './cursefilter.service';

describe('CursefilterService', () => {
  let service: CursefilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursefilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
