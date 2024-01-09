import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharactersComponent},
  {
    path: 'episodes', 
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./pages/planets/planets.module').then( m => m.PlanetsModule)
  },
  {path: 'characters/:id', component: CharacterDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
