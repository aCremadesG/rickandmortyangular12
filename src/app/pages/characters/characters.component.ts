import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Characters } from 'src/app/interfaces/characters';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(
    private CharacterService: CharacterService,
    private ViewPortScroller: ViewportScroller
  ) {}

  charactersData = {} as Characters;
  filters: string = "";

  ngOnInit(): void {
    this.getCharacters();
  }

  loadFilters(newFilters: string){
    console.log(newFilters);
    if(newFilters == ""){
      this.getCharacters();
      return;
    }
    this.filters = newFilters;
    this.getCharactersFiltered();
  }

  getCharactersFiltered(page=1){
    this.CharacterService.getFilteredCharacters(page, this.filters).subscribe({
      next: (res: any) => {
        this.charactersData = res;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  loadPage(page: number) {
    this.ViewPortScroller.scrollToPosition([0,0]);
    if(this.filters == "")this.getCharacters(page);
    else this.getCharactersFiltered(page);
  }

  getCharacters(page = 1){
    this.CharacterService.getCharacters(page).subscribe({
      next: (res: any) => {
        this.charactersData = res;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
