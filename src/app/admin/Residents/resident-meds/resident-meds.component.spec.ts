import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentMedsComponent } from './resident-meds.component';

describe('ResidentMedsComponent', () => {
  let component: ResidentMedsComponent;
  let fixture: ComponentFixture<ResidentMedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentMedsComponent]
    });
    fixture = TestBed.createComponent(ResidentMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
