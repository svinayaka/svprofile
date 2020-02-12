import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule,  } from '@angular/router';

import { AboutComponent } from '../sections/about/about.component';

const routes: Routes = [
  { component: AboutComponent, path: '' }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AboutModule { }
