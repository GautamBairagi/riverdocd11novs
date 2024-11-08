import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPatientComponent } from './setup-patient.component';

describe('SetupPatientComponent', () => {
  let component: SetupPatientComponent;
  let fixture: ComponentFixture<SetupPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupPatientComponent]
    });
    fixture = TestBed.createComponent(SetupPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
