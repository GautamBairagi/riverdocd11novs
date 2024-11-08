import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationPRNComponent } from './medication-prn.component';

describe('MedicationPRNComponent', () => {
  let component: MedicationPRNComponent;
  let fixture: ComponentFixture<MedicationPRNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationPRNComponent]
    });
    fixture = TestBed.createComponent(MedicationPRNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
