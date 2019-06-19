import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent implements OnInit {
  profileName = 'Siddhi Vinayaka';
  profileDesignation = 'Web Application Developer';
  profileContactDetails = [
    { contactInfo : 8095983167, contactType: 'Phone No' },
    { contactInfo : 'https://svinayaka.wordpress.com/', contactType: 'Blog' },
    { contactInfo : '#105, B-block, Olive Appartment, Hoodi, Bangalore-560048', contactType: 'Address' },
    { contactInfo : 'svinayaka290489@gmail.com', contactType: 'Email-Id' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
