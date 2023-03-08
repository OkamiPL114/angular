import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
	title: string;
	isTimeForThisComponent: boolean;
  show: any;
  cars: Cars[] = [];

	constructor() {
		this.isTimeForThisComponent = false;

		if(this.isTimeForThisComponent) {
			this.title = "Tematem tego wpisu jest dyrektywa ngFor"
		}
		else {
			this.title = "Tematem tego wpisu nie jest dyrektywa ngFor"
		}
    this.cars = [ 
      {brand: 'Audi', model: 'RS6', price: 729000, horsepower: 720},
      {brand: 'Pagani', model: 'Zonda F Roadster', price: 4200000, horsepower: 650},
      {brand: 'Audi', model: 'S8', price: 364800, horsepower: 605},
      {brand: 'McLaren Mercedes', model: 'SLR', price: 2400000, horsepower: 722}
    ]
	}


  ngOnInit() {
	}
}

class Cars {
  brand: string | undefined;
  model: string | undefined;
  price: number | undefined;
  horsepower: number | undefined;
}