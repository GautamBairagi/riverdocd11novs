import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookAComponent } from './notebook-a.component';

describe('NotebookAComponent', () => {
  let component: NotebookAComponent;
  let fixture: ComponentFixture<NotebookAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotebookAComponent]
    });
    fixture = TestBed.createComponent(NotebookAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
