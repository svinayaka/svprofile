import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumebodyComponent } from './resumebody.component';

describe('ResumebodyComponent', () => {
  let component: ResumebodyComponent;
  let fixture: ComponentFixture<ResumebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
