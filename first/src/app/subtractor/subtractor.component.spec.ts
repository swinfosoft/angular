import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractorComponent } from './subtractor.component';

describe('SubtractorComponent', () => {
  let component: SubtractorComponent;
  let fixture: ComponentFixture<SubtractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
