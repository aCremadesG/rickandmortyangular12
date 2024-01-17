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
    private characterService: CharacterService
  ) { }

  infoData = {} as Info;
  charactersData = [] as Character[];

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.characterService.getCharacters(1).subscribe({
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
    this.characterService.getMultipleCharacters(rndInt).subscribe({
      next: (res: any) => {
        this.charactersData = res;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getRandomNumbers(i: number,number: number) {
    let arrayID = [] as string[];
    let rndInt = ''
    for( let b = 0; b < i; b++){
      if(arrayID.length > 0){
        do {
          rndInt = Math.floor(Math.random() * number+1).toString();
        } while(arrayID.find((cNum) => cNum == rndInt))
      }else{
        rndInt = Math.floor(Math.random() * number+1).toString();
      }
      arrayID.push(rndInt);
    }
    return arrayID.join(',');
  }

}
