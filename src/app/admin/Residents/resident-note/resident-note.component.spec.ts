import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentNoteComponent } from './resident-note.component';

describe('ResidentNoteComponent', () => {
  let component: ResidentNoteComponent;
  let fixture: ComponentFixture<ResidentNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentNoteComponent]
    });
    fixture = TestBed.createComponent(ResidentNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
