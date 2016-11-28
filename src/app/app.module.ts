import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HomeComponent} from './component/home/HomeComponent';
import {AboutComponent} from './component/about/AboutComponent';
import {ContactComponent} from './component/contact/ContactComponent';
import {RoutesDemoApp} from './component/RoutesDemoApp';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contactus', redirectTo: 'contact' }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        RoutesDemoApp,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    bootstrap: [RoutesDemoApp],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})

export class RoutesDemoAppModule { }
