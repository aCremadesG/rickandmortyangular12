import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  apiURL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getEpisodes(page = 1){
    return this.http.get(`${this.apiURL}/api/episode?page=${page}`);
  }

  getMultipleEpisodes(ids: string){

  }

  getFilteredEpisodes(){

  }
}
