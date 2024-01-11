import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/interfaces/character';
import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interfaces/info';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private CharacterService: CharacterService
  ) { }

  infoData = {} as Info;
  charactersData = [] as Character[];

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.CharacterService.getCharacters().subscribe({
      next: (res: any) => {
        this.infoData = res.info;
        let rndInt = this.getRandomNumbers(6, this.infoData.count);
        this.getMultipleCharacters(rndInt);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getMultipleCharacters(rndInt: string){
    this.CharacterService.getMultipleCharacters(rndInt).subscribe({
      next: (res: any) => {
        this.charactersData = res;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getRandomNumbers(i: number,number: number) {
    let rndInt = ''
    for( let b = 0; b < i; b++){
      if(b !== 0){
        rndInt += ','
      }
      rndInt += Math.floor(Math.random() * number+1).toString();
    }
    return rndInt
  }

}
