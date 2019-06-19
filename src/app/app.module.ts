import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { ResumeFooterComponent } from './resume-footer/resume-footer.component';
import { ResumeContentComponent } from './resume-content/resume-content.component';
import { ResumeLeftContentComponent } from './resume-left-content/resume-left-content.component';
import { ResumeRightContentComponent } from './resume-right-content/resume-right-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeHeaderComponent,
    ResumeFooterComponent,
    ResumeContentComponent,
    ResumeLeftContentComponent,
    ResumeRightContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
