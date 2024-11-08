import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNurseComponent } from './my-nurse.component';

describe('MyNurseComponent', () => {
  let component: MyNurseComponent;
  let fixture: ComponentFixture<MyNurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNurseComponent]
    });
    fixture = TestBed.createComponent(MyNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
