import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsAComponent } from './meds-a.component';

describe('MedsAComponent', () => {
  let component: MedsAComponent;
  let fixture: ComponentFixture<MedsAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedsAComponent]
    });
    fixture = TestBed.createComponent(MedsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
