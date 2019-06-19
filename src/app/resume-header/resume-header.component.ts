import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent implements OnInit {
  profileName = 'Siddhi Vinayaka';
  constructor() { }

  ngOnInit() {
  }

}
