import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumebodyComponent } from './resumebody/resumebody.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { ListComponent } from './components/list/list.component';
import { ErrorHandlers } from './core/client-error-interceptor/client-error-interceptor';
import { HttpClientReqRes } from './core/header-service/header-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumebodyComponent,
    WorkexperienceComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlers },
    HttpClientReqRes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
