import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentReportCreateComponent } from './resident-report-create.component';

describe('ResidentReportCreateComponent', () => {
  let component: ResidentReportCreateComponent;
  let fixture: ComponentFixture<ResidentReportCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentReportCreateComponent]
    });
    fixture = TestBed.createComponent(ResidentReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
