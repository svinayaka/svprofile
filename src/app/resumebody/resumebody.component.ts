import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import "data" from './workExp.json';

@Component({
  selector: 'app-resumebody',
  templateUrl: './resumebody.component.html',
  styleUrls: ['./resumebody.component.scss']
})
export class ResumebodyComponent implements OnInit {
  workInfo = [];
  skillInfo = [];
  techInfo = [];
  summaryInfo = [];
  constructor(private http: HttpClient, private cd: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.http.get('./assets/workExp.json').subscribe(this.onWorkSuccess.bind(this), this.onWorkError.call(this, 'Error in fetching Work Experience!'));
    // tslint:disable-next-line:max-line-length
    this.http.get('./assets/workSkill.json').subscribe(this.onSkillSuccess.bind(this), this.onSkillError.call(this, 'Error in fetching Skill Experience!'));
    // tslint:disable-next-line:max-line-length
    this.http.get('./assets/technical.json').subscribe(this.onTechSuccess.bind(this), this.onTechError.call(this, 'Error in fetching Technology!'));
    // tslint:disable-next-line:max-line-length
    this.http.get('./assets/summary.json').subscribe(this.onSummarySuccess.bind(this), this.onSummaryError.call(this, 'Error in fetching Summary!'));
  }

  onWorkSuccess(data) { this.workInfo = data.workexperience; }
  onWorkError(errorTxt) { }

  onSkillSuccess(data) { this.skillInfo = data.workSkills; }
  onSkillError(errorTxt) { }

  onTechSuccess(data) { this.techInfo = data.technical; }
  onTechError(errorTxt) { }

  onSummarySuccess(data) { this.summaryInfo = data.summary; }
  onSummaryError(errorTxt) { }
}
