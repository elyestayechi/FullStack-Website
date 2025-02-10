import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaudierefComponent } from './chaudieref.component';

describe('ChaudierefComponent', () => {
  let component: ChaudierefComponent;
  let fixture: ComponentFixture<ChaudierefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaudierefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaudierefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
