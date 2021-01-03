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
   
  ngOnInit() {

  }

  /**
   * Fa una ricerca per una pianta in base ai parametri di ricerca
   */
  processForm() {

    this.formProcessed = true;

    this.pianteService.ricercaPiante(this.modelSearch, this.appstate.currentVasca, (success) => {
      this.array_piante = success;
    });
  }

  /**
   * Va nel dettaglio della pianta selezionata
   * @param piante 
   */
  onClick (piante) {

    console.log("# ricerca pianta");
    this.appstate.currentPiante = piante; 
    this.appstate.canAdd = this.appstate.currentVasca!= null? true : false;
  }

  public get pianteservice() {
    
    return this.pianteService;
  }
}
