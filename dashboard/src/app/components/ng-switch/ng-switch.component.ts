import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
	title: string;
	isTimeForThisComponent: boolean;
  show: any;
  cars: Cars[] = [];
  selectedCar: number;

	constructor() {
		this.isTimeForThisComponent = true;

		if(this.isTimeForThisComponent) {
			this.title = "Tematem tego wpisu jest dyrektywa ngSwitch"
		}
		else {
			this.title = "Tematem tego wpisu nie jest dyrektywa ngSwitch"
		}
    
    this.cars = [
      {id: 1, name: 'Audi RS6 C7'},
      {id: 2, name: 'Pegani Zonda F Roadster'},
      {id: 3, name: 'Nissan GTR R34'}
    ];
    this.selectedCar = 1;
  }
	ngOnInit(){
	}
}

class Cars {
  id: number | undefined;
  name: string | undefined;
}