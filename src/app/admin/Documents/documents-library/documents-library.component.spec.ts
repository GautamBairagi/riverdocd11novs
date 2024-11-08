import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsLibraryComponent } from './documents-library.component';

describe('DocumentsLibraryComponent', () => {
  let component: DocumentsLibraryComponent;
  let fixture: ComponentFixture<DocumentsLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsLibraryComponent]
    });
    fixture = TestBed.createComponent(DocumentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
