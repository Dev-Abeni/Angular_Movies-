import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
    maxRating = 5;

  @Input()
    selectedRate = 0;

  @Output()
    previousRate = 0;
    maxRatingArray: any[] = [];

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index:number){
    this.selectedRate = index + 1;
  }

  handleMouseLeave(){
    if(this.previousRate !== 0){
      this.selectedRate = this.previousRate;
    }else{
      this.selectedRate = 0;
    }
  }

  rate(index:number){
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
  }

}
