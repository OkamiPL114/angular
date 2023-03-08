import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
	title: string;
	isTimeForThisComponent: boolean;
	show: any;

	constructor() {
		console.log("Wywołanie konstrktora");
		this.isTimeForThisComponent = false;

		if(this.isTimeForThisComponent) {
			this.title = "Tematem tego wpisu jest dyrektywa ngIf"
		}
		else {
			this.title = "Tematem tego wpisu nie jest dyrektywa ngIf"
		}
	}
	ngOnInit(){
	}	
}
