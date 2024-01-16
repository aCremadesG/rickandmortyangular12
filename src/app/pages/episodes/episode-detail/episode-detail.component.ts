import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { Episode } from 'src/app/interfaces/episode';
import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private episodeService: EpisodeService,
    private characterService: CharacterService
  ) { }

    episodeData = {} as Episode;
    charactersData = [] as Character[];

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.url[0].path;
    this.getEpisode(id);
  }

  getEpisode(id: string){
    this.episodeService.getMultipleEpisodes(id).subscribe({
      next: (res: any) => {
        this.episodeData = res;
        this.getCharacters(res.characters);
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  getCharacters(characters: []){
    let arrayID = characters.map(function(resident: string){
      let arrayURL = resident.split('/');
      return arrayURL.slice(-1);
    }).join(',');
    this.characterService.getMultipleCharacters(arrayID).subscribe({
      next: (res: any) => {
        if(characters.length > 1){
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
