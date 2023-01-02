import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './job-card/job-card.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';

@NgModule({
  declarations: [AppComponent, JobCardComponent, TestPageComponent, DemoPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
