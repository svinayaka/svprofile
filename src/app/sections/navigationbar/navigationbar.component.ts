import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HttpClientReqRes } from '../../core/header-service/header-service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  contactInfo = null;
  constructor(private privHttp: HttpClientReqRes, private store: Store<any>) {
    store.subscribe(resp => {
      this.contactInfo = resp.ProfileInformation.userInfo;
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // this.privHttp.get('https://svnodeservices.herokuapp.com/svprofile/contact').subscribe(this.onContactSuccess.bind(this), this.onContactError.call(this, 'Error in fetching oontact Information!'));
  }

  onContactSuccess(data) { console.log( data.contact); this.contactInfo = data.contact; }
  onContactError(error) { }
}
