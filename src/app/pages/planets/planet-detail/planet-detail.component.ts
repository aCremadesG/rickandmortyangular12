import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { Planet } from 'src/app/interfaces/planet';
import { CharacterService } from 'src/app/services/character.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private locationService: LocationService,
    private characterService: CharacterService
  ) { }

  locationData = {} as Planet;
  charactersData = [] as Character[];

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.url[0].path;
    this.getLocation(id);
  }

  getLocation(id: string){
    this.locationService.getMultipleLocations(id).subscribe({
      next: (res: any) => {
        this.locationData = res;
        this.getResidents(res.residents);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getResidents(residents: []){
    let arrayID = residents.map(function(resident: string){
      let arrayURL = resident.split('/');
      return arrayURL.slice(-1);
    }).join(',');
    this.characterService.getMultipleCharacters(arrayID).subscribe({
      next: (res: any) => {
        if(residents.length > 1){
          this.charactersData = res;
        }else{
          this.charactersData.push(res);
        }
        console.log(this.charactersData);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

}
