import { Routes } from '@angular/router';
import { HomeComponent } from '../sections/home/home.component';
import { AboutComponent } from '../sections/about/about.component';

export const route: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'about', loadChildren: () => import('../app-Modules/aboutModules.module').then((homeMod) =>  homeMod.AboutModulesModule ) },
    // { path: 'about', loadChildren: '../app-Modules/aboutModules.module#AboutModule' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
