import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentNotebookComponent } from './resident-notebook.component';

describe('ResidentNotebookComponent', () => {
  let component: ResidentNotebookComponent;
  let fixture: ComponentFixture<ResidentNotebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentNotebookComponent]
    });
    fixture = TestBed.createComponent(ResidentNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
