import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() character = {} as Character

  ngOnInit(): void {
  }

  characterDetail(id: number){
    this.router.navigate([`characters/${this.character.id}`])
  }

}
