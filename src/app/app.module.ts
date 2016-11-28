import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { DashboardComponent } from './component/dashboard/dashboard.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    DashboardComponent
  ],
  bootstrap: [ DashboardComponent ]
})
export class AppModule { }
