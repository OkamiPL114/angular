import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit{
  // Definiujemy właściwości celem przechowywania/aktualizacji niezbędnych parametrów
  // Aby nie zaciemniać kodu dodałem tylko jedną właściwość dla opisu lokalizacji
  id: any;
  paramsSub: any;
  locationName: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // 1. Parametry przechowywane są w tzw. obiekcie obserwowalnym - Observable
    // 2. My subskrybujemy wszelkie zmiany. Każda zmiana wiąże się z ustawieniem odpowiedniej wartości
    //    właściwości id
    // 3. W realnym świecie identyfikator zostałyby użyty do pobrania danych z API
    // 4. Aby przeciwdziałać wyciekom pamięci używamy metody unsubsribe()
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }

  ngOnDestroy() {
    this.paramsSub.unsubsribe();
  }

  loadDataFromDevelopmentAPI() {
    // Tutaj powinniśmy wykonać zapytanie do API - o tym w kolejnym wpisie
    // Na potrzeby tej implementacji dodamy prostą instrukcję warunkową

    if(this.id === 1) {
      this.locationName = "Pallota Teamworks";
    }else if(this.id === 2) {
      this.locationName = "Zynga";
    }else {
      this.locationName = "Wskazana lokalizacja nie istnieje";
    }
  }
}
