import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumebodyComponent } from './resumebody/resumebody.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumebodyComponent,
    WorkexperienceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
