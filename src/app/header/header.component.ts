import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  contactInfo = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://svnodeservices.herokuapp.com/svprofile/contact').subscribe(this.onContactSuccess.bind(this), this.onContactError.call(this, 'Error in fetching Work Experience!'));
  }

  onContactSuccess(data) { this.contactInfo = data.contact; }
  onContactError(error) { }
}
