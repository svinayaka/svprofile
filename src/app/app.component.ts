import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUserInfosSuccess } from './ngrxStateManagement/profileInformation/userInfo/user-info.actions';
import { LoadUserSkillSuccessfully } from './ngrxStateManagement/profileInformation/userSkill/user-skill.actions';
import { HttpClientReqRes } from './core/header-service/header-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contactInfo = null;
  constructor(private privHttp: HttpClientReqRes, private store: Store<any>) { }
  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.privHttp.get('https://svnodeservices.herokuapp.com/svprofile/contact').subscribe(this.onContactSuccess.bind(this), this.onContactError.call(this, 'Error in fetching oontact Information!'));
    // tslint:disable-next-line:max-line-length
    this.privHttp.get('https://svnodeservices.herokuapp.com/svprofile/workskill').subscribe(this.onSkillSuccess.bind(this), this.onSkillError.call(this, 'Error in fetching Skill Experience!'));
  }

  onContactSuccess(data) {
    this.contactInfo = data.contact;
    this.store.dispatch(new LoadUserInfosSuccess(data.contact));
  }
  onContactError(error) { }
  onSkillSuccess(data) {
    this.store.dispatch(new LoadUserSkillSuccessfully(data.workSkills));
  }
  onSkillError(error) { }
}
