import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PianteService } from 'src/app/_services/piante.service';


@Component({
  selector: 'app-ricerca-piante',
  templateUrl: './ricerca-piante.component.html',
  styleUrls: ['./ricerca-piante.component.scss'],
})
export class RicercaPianteComponent implements OnInit {

  protected array_piante = [];

  protected formProcessed: boolean = false;


  
    //  Oggetto per la ricerca di una pianta
  public modelSearch = {
    nomePiante: ""
  }

  constructor(private appstate:AppStateService, private pianteService: PianteService) { }
   
   
   ngOnInit() { }
/**
   * Fa una ricerca per una pianta in base ai parametri di ricerca
   */
  processForm() {

    this.formProcessed = true;

    this.pianteService.ricercaPiante(this.modelSearch, this.appstate.currenVasca, (success) => {
      this.array_piante = success;
    });
    
  }

   onClick (piante) {
    this.appstate.currentPiante = piante; 
  }

  public get pianteservice() {
    return this.pianteService;

}
}
