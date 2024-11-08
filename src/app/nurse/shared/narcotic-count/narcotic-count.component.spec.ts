import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarcoticCountComponent } from './narcotic-count.component';

describe('NarcoticCountComponent', () => {
  let component: NarcoticCountComponent;
  let fixture: ComponentFixture<NarcoticCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarcoticCountComponent]
    });
    fixture = TestBed.createComponent(NarcoticCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
