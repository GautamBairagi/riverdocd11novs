import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmailComponent } from './addmail.component';

describe('AddmailComponent', () => {
  let component: AddmailComponent;
  let fixture: ComponentFixture<AddmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmailComponent]
    });
    fixture = TestBed.createComponent(AddmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
