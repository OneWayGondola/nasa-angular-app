import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodComponent } from './apod/apod.component';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ApodComponent,
    FeatureHeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class FeatureModule { }
