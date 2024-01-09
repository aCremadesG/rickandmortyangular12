import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets-card',
  templateUrl: './planets-card.component.html',
  styleUrls: ['./planets-card.component.scss']
})
export class PlanetsCardComponent implements OnInit {

  constructor(private router: Router) { }
  
  @Input() location = {} as Planet
  
  ngOnInit(): void {
  }

  locationDetail(id: number){
    this.router.navigate([`locations/${this.location.id}`])
  }

}
