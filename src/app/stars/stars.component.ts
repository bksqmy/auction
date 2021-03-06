import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  public rating: number;
  public stars = [];


  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
        this.stars.push(i > this.rating);
    }
  }

}
