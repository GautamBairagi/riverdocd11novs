import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsnComponent } from './medsn.component';

describe('MedsnComponent', () => {
  let component: MedsnComponent;
  let fixture: ComponentFixture<MedsnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedsnComponent]
    });
    fixture = TestBed.createComponent(MedsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
