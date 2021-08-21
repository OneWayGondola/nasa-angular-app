import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApodComponent } from './feature/apod/apod.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apod', component: ApodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
