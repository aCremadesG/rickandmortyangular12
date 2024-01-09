import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetDetailComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    ComponentsModule
  ]
})
export class PlanetsModule { }
