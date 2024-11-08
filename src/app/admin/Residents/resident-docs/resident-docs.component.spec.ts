import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDocsComponent } from './resident-docs.component';

describe('ResidentDocsComponent', () => {
  let component: ResidentDocsComponent;
  let fixture: ComponentFixture<ResidentDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentDocsComponent]
    });
    fixture = TestBed.createComponent(ResidentDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
