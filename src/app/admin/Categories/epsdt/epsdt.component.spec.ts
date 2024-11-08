import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPSDTComponent } from './epsdt.component';

describe('EPSDTComponent', () => {
  let component: EPSDTComponent;
  let fixture: ComponentFixture<EPSDTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EPSDTComponent]
    });
    fixture = TestBed.createComponent(EPSDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
