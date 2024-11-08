import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesheetComponent } from './facesheet.component';

describe('FacesheetComponent', () => {
  let component: FacesheetComponent;
  let fixture: ComponentFixture<FacesheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacesheetComponent]
    });
    fixture = TestBed.createComponent(FacesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
