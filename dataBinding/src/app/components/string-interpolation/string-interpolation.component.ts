import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  title = "O jasny ciul, to działa!";

  brand = "Stilo";
  model = "Barzyka";
  power: number = 580;

  // 1 KM = 0,74 kW
  converter: number = 0.74;

  // Metoda dokonująca konwersji KM na kW
  convertKMtokW() {
    return this.power * this.converter;
  }
}
