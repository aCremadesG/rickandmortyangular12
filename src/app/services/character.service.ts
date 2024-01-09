import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiURL = environment.apiUrl

  constructor(
    private http: HttpClient
  ) {}

  getCharacters(page = 1){
    return this.http.get(`${this.apiURL}/api/character?page=${page}`);
  }

  getMultipleCharacters(ids: string){
    return this.http.get(`${this.apiURL}/api/character/${ids}`);
  }

  getFilteredCharacters(){
    return this.http.get(`${this.apiURL}/api/character/`);
  }
}
