import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationDestructionMethodsComponent } from './medication-destruction-methods.component';

describe('MedicationDestructionMethodsComponent', () => {
  let component: MedicationDestructionMethodsComponent;
  let fixture: ComponentFixture<MedicationDestructionMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicationDestructionMethodsComponent]
    });
    fixture = TestBed.createComponent(MedicationDestructionMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
