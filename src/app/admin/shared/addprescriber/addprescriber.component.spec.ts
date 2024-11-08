import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprescriberComponent } from './addprescriber.component';

describe('AddprescriberComponent', () => {
  let component: AddprescriberComponent;
  let fixture: ComponentFixture<AddprescriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprescriberComponent]
    });
    fixture = TestBed.createComponent(AddprescriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
