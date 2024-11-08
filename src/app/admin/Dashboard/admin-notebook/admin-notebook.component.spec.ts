import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotebookComponent } from './admin-notebook.component';

describe('AdminNotebookComponent', () => {
  let component: AdminNotebookComponent;
  let fixture: ComponentFixture<AdminNotebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNotebookComponent]
    });
    fixture = TestBed.createComponent(AdminNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
