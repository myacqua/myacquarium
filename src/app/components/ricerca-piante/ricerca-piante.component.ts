import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PianteService } from 'src/app/_services/piante.service';


@Component({
  selector: 'app-ricerca-piante',
  templateUrl: './ricerca-piante.component.html',
  styleUrls: ['./ricerca-piante.component.scss'],
})
export class RicercaPianteComponent implements OnInit {

  public array_piante = [];


  //  Oggetto per la ricerca di un pesce
  public modelSearch = {
    nomePiante: ""
  }

  constructor(private appstate:AppStateService, private pianteService: PianteService) { }
   
   
   ngOnInit() { }
/**
   * Fa una ricerca per un pesce in base ai parametri di ricerca
   */
  searchPiante() {

    this.pianteService.ricercaPiante(this.modelSearch, (success) => {
      this.array_piante = success;
    });
    
  }

   onClick (piante) {
    this.appstate.currentPiante = piante; 
  }

}
