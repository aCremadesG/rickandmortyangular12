import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    CharacterDetailComponent,
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
