import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentgroupComponent } from './residentgroup.component';

describe('ResidentgroupComponent', () => {
  let component: ResidentgroupComponent;
  let fixture: ComponentFixture<ResidentgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentgroupComponent]
    });
    fixture = TestBed.createComponent(ResidentgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
