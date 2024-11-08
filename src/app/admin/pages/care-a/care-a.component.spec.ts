import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAComponent } from './care-a.component';

describe('CareAComponent', () => {
  let component: CareAComponent;
  let fixture: ComponentFixture<CareAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareAComponent]
    });
    fixture = TestBed.createComponent(CareAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
