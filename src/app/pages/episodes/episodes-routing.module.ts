import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: EpisodeDetailComponent
      },
      {
        path: '',
        component: EpisodesComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EpisodesRoutingModule { }
