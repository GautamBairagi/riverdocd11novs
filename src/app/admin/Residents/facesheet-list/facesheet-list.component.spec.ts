import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesheetListComponent } from './facesheet-list.component';

describe('FacesheetListComponent', () => {
  let component: FacesheetListComponent;
  let fixture: ComponentFixture<FacesheetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacesheetListComponent]
    });
    fixture = TestBed.createComponent(FacesheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
