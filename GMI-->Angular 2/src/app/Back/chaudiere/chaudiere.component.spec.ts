import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaudiereComponent } from './chaudiere.component';

describe('ChaudiereComponent', () => {
  let component: ChaudiereComponent;
  let fixture: ComponentFixture<ChaudiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaudiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaudiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
