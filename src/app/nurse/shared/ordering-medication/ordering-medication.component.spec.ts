import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingMedicationComponent } from './ordering-medication.component';

describe('OrderingMedicationComponent', () => {
  let component: OrderingMedicationComponent;
  let fixture: ComponentFixture<OrderingMedicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderingMedicationComponent]
    });
    fixture = TestBed.createComponent(OrderingMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
