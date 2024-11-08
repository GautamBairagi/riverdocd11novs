import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarenComponent } from './caren.component';

describe('CarenComponent', () => {
  let component: CarenComponent;
  let fixture: ComponentFixture<CarenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarenComponent]
    });
    fixture = TestBed.createComponent(CarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
