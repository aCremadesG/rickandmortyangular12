import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiURL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getLocations(page = 1){
    return this.http.get(`${this.apiURL}/api/location?page=${page}`);
  }

  getMultipleLocations(ids: string){

  }

  getFilteredLocations(){

  }
}
