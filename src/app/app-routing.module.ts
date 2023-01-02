import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

const routes: Routes = [
  { path: 'test', component: TestPageComponent },
  {
    path: 'demo',
    component: DemoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
