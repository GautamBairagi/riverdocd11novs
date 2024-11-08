import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeizureSymptomsComponent } from './seizure-symptoms.component';

describe('SeizureSymptomsComponent', () => {
  let component: SeizureSymptomsComponent;
  let fixture: ComponentFixture<SeizureSymptomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeizureSymptomsComponent]
    });
    fixture = TestBed.createComponent(SeizureSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
