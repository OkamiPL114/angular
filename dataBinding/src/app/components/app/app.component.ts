import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  isVisible1 = 'sectionVis';
  isVisible2 = 'sectionInvis';
  isVisible3 = 'sectionInvis';
  isVisible4 = 'sectionInvis';

  propertyClick() {
    this.isVisible1 = 'sectionVis';
    this.isVisible2 = 'sectionInvis';
    this.isVisible3 = 'sectionInvis';
    this.isVisible4 = 'sectionInvis';
  }
  stringClick() {
    this.isVisible1 = 'sectionInvis';
    this.isVisible2 = 'sectionVis';
    this.isVisible3 = 'sectionInvis';
    this.isVisible4 = 'sectionInvis';
  }
  eventClick() {
    this.isVisible1 = 'sectionInvis';
    this.isVisible2 = 'sectionInvis';
    this.isVisible3 = 'sectionVis';
    this.isVisible4 = 'sectionInvis';
  }
  twoWayClick() {
    this.isVisible1 = 'sectionInvis';
    this.isVisible2 = 'sectionInvis';
    this.isVisible3 = 'sectionInvis';
    this.isVisible4 = 'sectionVis';
  }
}