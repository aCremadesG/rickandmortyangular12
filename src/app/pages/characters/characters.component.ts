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

  ngOnInit(): void {
    this.getCharacters();
  }

  async loadPage(page: number) {
    this.ViewPortScroller.scrollToPosition([0,0]);
    this.getCharacters(page);
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
