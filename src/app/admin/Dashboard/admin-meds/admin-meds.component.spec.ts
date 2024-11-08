import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedsComponent } from './admin-meds.component';

describe('AdminMedsComponent', () => {
  let component: AdminMedsComponent;
  let fixture: ComponentFixture<AdminMedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMedsComponent]
    });
    fixture = TestBed.createComponent(AdminMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
