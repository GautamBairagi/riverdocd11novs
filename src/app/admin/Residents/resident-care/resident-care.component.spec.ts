import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentCareComponent } from './resident-care.component';

describe('ResidentCareComponent', () => {
  let component: ResidentCareComponent;
  let fixture: ComponentFixture<ResidentCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentCareComponent]
    });
    fixture = TestBed.createComponent(ResidentCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
