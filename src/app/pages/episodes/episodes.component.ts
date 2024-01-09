import { Component, OnInit } from '@angular/core';
import { Episodes } from 'src/app/interfaces/episodes';
import { EpisodeService } from 'src/app/services/episode.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(
    private EpisodeService: EpisodeService,
    private ViewPortScroller: ViewportScroller
  ) { }

    episodesData = {} as Episodes;

  ngOnInit(): void {
    this.getEpisodes();
  }

  async loadPage(page: number) {
    this.ViewPortScroller.scrollToPosition([0,0]);
    this.getEpisodes(page);
  }

  getEpisodes(page = 1){
    this.EpisodeService.getEpisodes(page).subscribe({
      next: (res: any) => {
        this.episodesData = res;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
