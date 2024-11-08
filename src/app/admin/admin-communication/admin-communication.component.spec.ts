import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommunicationComponent } from './admin-communication.component';

describe('AdminCommunicationComponent', () => {
  let component: AdminCommunicationComponent;
  let fixture: ComponentFixture<AdminCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCommunicationComponent]
    });
    fixture = TestBed.createComponent(AdminCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
