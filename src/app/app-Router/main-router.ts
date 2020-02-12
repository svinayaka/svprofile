import { Routes } from '@angular/router';
import { HomeComponent } from '../sections/home/home.component';
import { AboutComponent } from '../sections/about/about.component';

export const route: Routes = [
    { path: '', component: HomeComponent},
    // { path: 'about', loadChildren: () => import('../app-Modules/aboutModules.module').then((homeMod) =>  homeMod.AboutModulesModule ) },
    // { path: 'about', loadChildren: '../app-Modules/aboutModules.module#AboutModule' },
    { path: 'about', component: AboutComponent }
];
