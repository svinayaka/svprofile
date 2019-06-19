import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLeftContentComponent } from './resume-left-content.component';

describe('ResumeLeftContentComponent', () => {
  let component: ResumeLeftContentComponent;
  let fixture: ComponentFixture<ResumeLeftContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeLeftContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLeftContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
