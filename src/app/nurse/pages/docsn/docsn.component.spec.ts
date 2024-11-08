import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsnComponent } from './docsn.component';

describe('DocsnComponent', () => {
  let component: DocsnComponent;
  let fixture: ComponentFixture<DocsnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocsnComponent]
    });
    fixture = TestBed.createComponent(DocsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
