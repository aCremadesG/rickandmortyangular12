import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() episode = {} as Episode

  ngOnInit(): void {
  }

  episodeDetail(id: number){
    this.router.navigate([`episodes/${this.episode.id}`])
  }

}
