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
  constructor(private http: HttpClient, private cd: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {
    this.http.get('./assets/workExp.json').subscribe(this.onWorkSuccess.bind(this), this.onWorkError.bind(this));
    this.http.get('./assets/workSkill.json').subscribe(this.onSkillSuccess.bind(this), this.onSkillError.bind(this));
  }

  onWorkSuccess(data) { this.workInfo = data.workexperience; }
  onWorkError(error) { }

  onSkillSuccess(data) {
    this.skillInfo = data.workSkills;
  }
  onSkillError(error) { }
}
