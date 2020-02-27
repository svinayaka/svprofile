import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResumebodyComponent } from './resumebody/resumebody.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { ListComponent } from './components/list/list.component';
import { ErrorHandlers } from './core/client-error-interceptor/client-error-interceptor';
import { HttpClientReqRes } from './core/header-service/header-service';


import { RouterModule } from '@angular/router';
import { route } from './app-Router/main-router';

// Angular Material Modules
import { bootstrapModules } from './applicationExports/applicationModulesExports/3rdpartyModulesExports';
import { angularModules } from './applicationExports/applicationModulesExports/angularModulesExports';


import { angularComponents } from './applicationExports/applicationComponentExports/applicationComponents';
import { ReuseableComponents } from './applicationExports/applicationComponentExports/applicationReusableComponents';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './ngrxStateManagement';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SkillComponent } from './sections/skill/skill.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // ResumebodyComponent,
    ...ReuseableComponents,
    ...angularComponents,
    SkillComponent
  ],
  imports: [
    ...angularModules,
    ...bootstrapModules,
    RouterModule.forRoot(route),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlers },
    HttpClientReqRes
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
