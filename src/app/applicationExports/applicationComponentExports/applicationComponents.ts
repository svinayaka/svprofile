import { NgModule } from '@angular/core';
import { HomeComponent } from '../../sections/home/home.component';
import { AboutComponent } from '../../sections/about/about.component';
import { NavigationbarComponent } from '../../sections/navigationbar/navigationbar.component';

@NgModule({
    declarations: [HomeComponent, AboutComponent, NavigationbarComponent],
    imports: [],
    providers: []
})
export class ApplicationComponents { }
