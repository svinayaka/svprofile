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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { route } from './app-Router/main-router';

// Angular Material Modules
import { newStyles } from './applicationExports/3rdpartComponentsExports/3rdpartyComponents';

import { AboutComponent } from './sections/about/about.component';
import { HomeComponent } from './sections/home/home.component';

import { ReuseableComponents } from './applicationExports/applicationComponentExports/applicationReusableComponents';
import { NavigationbarComponent } from './sections/navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResumebodyComponent,
    ...ReuseableComponents,
    AboutComponent,
    HomeComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...newStyles
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlers },
    HttpClientReqRes
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
