import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian-info',
  templateUrl: './accordian-info.component.html',
  styleUrls: ['./accordian-info.component.scss']
})
export class AccordianInfoComponent implements OnInit {
  title = 'Technical Skill';
  content = `Ye to mention technical Skills`;
  constructor() { }

  ngOnInit() {
  }

}
