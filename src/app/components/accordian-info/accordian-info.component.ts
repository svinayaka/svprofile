import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian-info',
  templateUrl: './accordian-info.component.html',
  styleUrls: ['./accordian-info.component.scss']
})
export class AccordianInfoComponent implements OnInit, AfterViewInit {
  accordionInfo = [];
  selectedAccordion = null;
  @ViewChildren('btn') accordionBtn: QueryList<ElementRef>;
  @Input() set assignAccordInfo(accordInfo) {
    if (accordInfo && accordInfo.length > 0) {
      this.accordionInfo = accordInfo;
    }
  }
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
    if (this.accordionBtn) {
      this.accordionBtn.forEach(elm => {
          elm.nativeElement.nextElementSibling.hidden = true;
      });
    }
  }
}
