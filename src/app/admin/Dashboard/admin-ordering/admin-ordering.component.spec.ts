import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderingComponent } from './admin-ordering.component';

describe('AdminOrderingComponent', () => {
  let component: AdminOrderingComponent;
  let fixture: ComponentFixture<AdminOrderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderingComponent]
    });
    fixture = TestBed.createComponent(AdminOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
