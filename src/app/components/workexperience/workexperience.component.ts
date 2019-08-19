import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface IAchievementDetails {
  text: string;
}

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.scss']
})
export class WorkexperienceComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() workRange: string;
  @Input() location: string;
  @Input() project: string;
  @Input() achieveList: Array<IAchievementDetails>;
  constructor() { }

  ngOnInit() {
  }

}
