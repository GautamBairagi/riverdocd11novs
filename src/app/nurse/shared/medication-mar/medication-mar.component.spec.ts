import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationMARComponent } from './medication-mar.component';

describe('MedicationMARComponent', () => {
  let component: MedicationMARComponent;
  let fixture: ComponentFixture<MedicationMARComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationMARComponent]
    });
    fixture = TestBed.createComponent(MedicationMARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
