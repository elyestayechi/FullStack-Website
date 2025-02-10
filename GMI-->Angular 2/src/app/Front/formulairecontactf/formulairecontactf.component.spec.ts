import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairecontactfComponent } from './formulairecontactf.component';

describe('FormulairecontactfComponent', () => {
  let component: FormulairecontactfComponent;
  let fixture: ComponentFixture<FormulairecontactfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairecontactfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairecontactfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
