import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-accordian-info',
  templateUrl: './accordian-info.component.html',
  styleUrls: ['./accordian-info.component.scss']
})
export class AccordianInfoComponent implements OnInit, AfterViewInit {
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
    const elmClone = document.activeElement.nextElementSibling.cloneNode();
    const elm = document.activeElement.nextElementSibling;
    this.hideAccordionData();
    (elm as any).hidden = !((elmClone as any).hidden);
  }

  hideAccordionData() {
    this.accordionBtn.forEach(elm => {
        elm.nativeElement.nextElementSibling.hidden = true;
    });
  }
}
