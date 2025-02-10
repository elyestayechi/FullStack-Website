import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireContactComponent } from './formulairecontact.component';

describe('FormulairecontactComponent', () => {
  let component: FormulaireContactComponent;
  let fixture: ComponentFixture<FormulaireContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
