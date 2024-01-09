import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/planets';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(
    private LocationsService: LocationService,
    private ViewPortScroller: ViewportScroller
  ) { }

    locationsData = {} as Planets;

  ngOnInit(): void {
    this.getLocations();
  }

  async loadPage(page: number) {
    this.ViewPortScroller.scrollToPosition([0,0]);
    this.getLocations(page);
  }

  getLocations(page = 1){
    this.LocationsService.getLocations(page).subscribe({
      next: (res: any) => {
        this.locationsData = res;
        console.log(this.locationsData);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
