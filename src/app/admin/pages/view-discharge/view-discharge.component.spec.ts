import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDischargeComponent } from './view-discharge.component';

describe('ViewDischargeComponent', () => {
  let component: ViewDischargeComponent;
  let fixture: ComponentFixture<ViewDischargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDischargeComponent]
    });
    fixture = TestBed.createComponent(ViewDischargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
