import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HomeComponent} from './component/home/HomeComponent';
import {AboutComponent} from './component/about/AboutComponent';
import {ContactComponent} from './component/contact/ContactComponent';
import {AppComponent} from './component/app/app.component';
import {AppFooter} from './component/footer/footer.component';
import {AppHeader} from './component/header/header.component';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: 'contact', component: ContactComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        AppFooter,
        AppHeader
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})

export class RoutesDemoAppModule { }
