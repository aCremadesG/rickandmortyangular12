import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pages: number = 0;
  @Output() pageGo = new EventEmitter<number>();
  actualPage: number = 1;
  navArray: Array<number> = [];

  ngOnInit(): void {
    this.setArray();
  }

  changePage( page: number ) {
    if(this.actualPage !== page){
      this.actualPage = page;
      this.pageGo.emit(this.actualPage);
      this.setArray();
    }
  }

  setArray(){
    this.navArray = []
    let number = this.actualPage;
    let iterations = 10;
    if(this.pages > 9){
      if( number > 4 && number < this.pages - 4 ) {
        number = number - 4;
      }else if( number > this.pages - 5 ) {
        number = this.pages - 9
      }else{
        number = 1
      }
    }else{
      iterations = this.pages;
      number = 1
    }
    for(let i = 0; i < iterations; i++){
      this.navArray.push(i+number);
    }
  }

}
