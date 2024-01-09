import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { PlanetsCardComponent } from './planets-card/planets-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    CharacterCardComponent,
    HeaderComponent,
    PaginationComponent,
    EpisodeCardComponent,
    PlanetsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CharacterCardComponent,
    PaginationComponent,
    EpisodeCardComponent,
    PlanetsCardComponent
  ]
})
export class ComponentsModule { }
