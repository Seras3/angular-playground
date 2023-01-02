import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { InstantFiltersComponent } from './components/instant-filters/instant-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    TestPageComponent,
    DemoPageComponent,
    ActionCardComponent,
    FilterComponent,
    SearchFiltersComponent,
    InstantFiltersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
