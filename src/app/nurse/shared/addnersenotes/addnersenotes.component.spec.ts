import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnersenotesComponent } from './addnersenotes.component';

describe('AddnersenotesComponent', () => {
  let component: AddnersenotesComponent;
  let fixture: ComponentFixture<AddnersenotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnersenotesComponent]
    });
    fixture = TestBed.createComponent(AddnersenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
