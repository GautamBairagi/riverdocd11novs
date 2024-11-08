import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsOverviewComponent } from './documents-overview.component';

describe('DocumentsOverviewComponent', () => {
  let component: DocumentsOverviewComponent;
  let fixture: ComponentFixture<DocumentsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsOverviewComponent]
    });
    fixture = TestBed.createComponent(DocumentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
