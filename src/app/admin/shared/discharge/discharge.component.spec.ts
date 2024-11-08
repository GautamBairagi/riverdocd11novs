import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeComponent } from './discharge.component';

describe('DischargeComponent', () => {
  let component: DischargeComponent;
  let fixture: ComponentFixture<DischargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DischargeComponent]
    });
    fixture = TestBed.createComponent(DischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
