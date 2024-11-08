import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentComponent } from './view-appointment.component';

describe('ViewAppointmentComponent', () => {
  let component: ViewAppointmentComponent;
  let fixture: ComponentFixture<ViewAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAppointmentComponent]
    });
    fixture = TestBed.createComponent(ViewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
