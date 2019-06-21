import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-left-content',
  templateUrl: './resume-left-content.component.html',
  styleUrls: ['./resume-left-content.component.scss']
})
export class ResumeLeftContentComponent implements OnInit {
  accordionInfo = [
    {title: 'SUMMARY', content: `Ye to mention technical Skills dsfsdffwefwefewf`},
    {title: 'TECHNICAL SKILLS', content: `Ye to mention technical Skills dsfsdffwefwefewf`},
    {title: 'WORK EXPERIENCE', content: `Ye to mention technical Skills`},
    {title: 'QUALIFICATIONS', content: `Ye to mention technical Skills`},
    {title: 'INTERESTS', content: `Ye to mention technical Skills`}
  ];

  constructor() { }

  ngOnInit() { }

}
