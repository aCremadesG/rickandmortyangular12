import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: PlanetDetailComponent
      },
      {
        path: '',
        component: PlanetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PlanetsRoutingModule { }
