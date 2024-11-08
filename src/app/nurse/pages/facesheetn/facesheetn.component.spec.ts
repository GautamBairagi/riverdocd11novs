import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesheetnComponent } from './facesheetn.component';

describe('FacesheetnComponent', () => {
  let component: FacesheetnComponent;
  let fixture: ComponentFixture<FacesheetnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacesheetnComponent]
    });
    fixture = TestBed.createComponent(FacesheetnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
