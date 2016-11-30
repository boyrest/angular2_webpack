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
import {UserItem} from './component/common/list/app.user.item';
import {FormIndexComponent} from './component/form/form.component';
import {FormsModule} from '@angular/forms';
import {ArticleComponent} from './component/form/article/article.component';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'form', component: FormIndexComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        AppFooter,
        AppHeader,
        UserItem,
        FormIndexComponent,
        ArticleComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})

export class RoutesDemoAppModule { }
