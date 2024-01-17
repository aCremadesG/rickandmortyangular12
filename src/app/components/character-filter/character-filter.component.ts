import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {

  @Output() newFilters = new EventEmitter<string>();

  characterForm = new FormGroup({
    name: new FormControl(""),
    status: new FormControl(""),
    specie: new FormControl(""),
    type: new FormControl(""),
    gender: new FormControl(""),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let formKeys = Object.keys(this.characterForm.value);
    let keysString = "";
    formKeys.map((key) => {
      if(this.characterForm.value[key] != ""){
        keysString += `&${key}=${this.characterForm.value[key]}`
      }
    })
    this.newFilters.emit(keysString);
  }

}
