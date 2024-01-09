import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    ComponentsModule
  ]
})
export class EpisodesModule { }
