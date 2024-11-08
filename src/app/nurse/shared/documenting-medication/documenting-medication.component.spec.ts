import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentingMedicationComponent } from './documenting-medication.component';

describe('DocumentingMedicationComponent', () => {
  let component: DocumentingMedicationComponent;
  let fixture: ComponentFixture<DocumentingMedicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentingMedicationComponent]
    });
    fixture = TestBed.createComponent(DocumentingMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
