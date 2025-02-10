import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicfComponent } from './servicf.component';

describe('ServicfComponent', () => {
  let component: ServicfComponent;
  let fixture: ComponentFixture<ServicfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
