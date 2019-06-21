import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-accordian-info',
  templateUrl: './accordian-info.component.html',
  styleUrls: ['./accordian-info.component.scss']
})
export class AccordianInfoComponent implements OnInit {
  @ViewChildren('btn') accordionBtn: QueryList<ElementRef>;
  accordionInfo = [
    {title: 'Technical Skills', content: `Ye to mention technical Skills dsfsdffwefwefewf`},
    {title: 'Work Experience', content: `Ye to mention technical Skills`}
  ];
  selectedAccordion = null;
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.hideAccordionData();
  }

  selectedBtn(event) {
    this.hideAccordionData();
    const elm = document.activeElement.nextElementSibling;
    (elm as any).hidden = false;
  }

  hideAccordionData() {
    this.accordionBtn.forEach(elm => {
        elm.nativeElement.nextElementSibling.hidden = true;
    });
  }
}
