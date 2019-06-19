import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRightContentComponent } from './resume-right-content.component';

describe('ResumeRightContentComponent', () => {
  let component: ResumeRightContentComponent;
  let fixture: ComponentFixture<ResumeRightContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeRightContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
