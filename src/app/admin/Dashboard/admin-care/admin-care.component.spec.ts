import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCareComponent } from './admin-care.component';

describe('AdminCareComponent', () => {
  let component: AdminCareComponent;
  let fixture: ComponentFixture<AdminCareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCareComponent]
    });
    fixture = TestBed.createComponent(AdminCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
