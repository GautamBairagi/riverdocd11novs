import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingMedicationComponent } from './logging-medication.component';

describe('LoggingMedicationComponent', () => {
  let component: LoggingMedicationComponent;
  let fixture: ComponentFixture<LoggingMedicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggingMedicationComponent]
    });
    fixture = TestBed.createComponent(LoggingMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
