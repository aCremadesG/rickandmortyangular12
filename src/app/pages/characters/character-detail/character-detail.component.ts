import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private CharacterService: CharacterService,
  ) { }

  characterData = {} as Character;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.url[1].path;
    this.getCharacter(id);
  }

  getCharacter(id: string){
    this.CharacterService.getMultipleCharacters(id).subscribe({
      next: (res: any) => {
        this.characterData = res;
        console.log(this.characterData);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

}
