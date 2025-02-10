import { TestBed } from '@angular/core/testing';

import { FormulaireContactService } from './formulaire-contact.service';

describe('FormulaireContactService', () => {
  let service: FormulaireContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaireContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
