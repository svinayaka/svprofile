import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skillList = [];
  constructor(private store: Store<any>) {
    this.store.subscribe((resp) => {
      this.skillList = resp.ProfileSkill.userSkill || [];
      console.log(this.skillList);
    });
  }

  ngOnInit() {

  }

}
