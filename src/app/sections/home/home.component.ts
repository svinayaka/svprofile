import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileInfo = null;
  constructor(private store: Store<any>) {
    this.store.subscribe((resp) => {
      this.profileInfo = resp.ProfileInformation.userInfo;
      console.log(this.profileInfo);
    });
  }

  ngOnInit() {
  }

}
