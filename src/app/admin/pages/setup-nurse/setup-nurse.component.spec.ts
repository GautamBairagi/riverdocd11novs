import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNurseComponent } from './setup-nurse.component';

describe('SetupNurseComponent', () => {
  let component: SetupNurseComponent;
  let fixture: ComponentFixture<SetupNurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupNurseComponent]
    });
    fixture = TestBed.createComponent(SetupNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
