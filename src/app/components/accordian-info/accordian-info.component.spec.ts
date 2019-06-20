import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianInfoComponent } from './accordian-info.component';

describe('AccordianInfoComponent', () => {
  let component: AccordianInfoComponent;
  let fixture: ComponentFixture<AccordianInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
