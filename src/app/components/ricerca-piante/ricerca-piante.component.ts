import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PianteService } from 'src/app/_services/piante.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';


@Component({
  selector: 'app-ricerca-piante',
  templateUrl: './ricerca-piante.component.html',
  styleUrls: ['./ricerca-piante.component.scss'],
})
export class RicercaPianteComponent implements OnInit {

  array_piante: any = [];

  formProcessed: boolean = false;


  
    //  Oggetto per la ricerca di una pianta
  public modelSearch = {
    nomePiante: "",
    validoVasca: false
  }

  constructor(private notify: AlertService, private appstate:AppStateService, private pianteService: PianteService) { }
   
  ngOnInit() {

  }

  /**
   * Fa una ricerca per una pianta in base ai parametri di ricerca
   */
  processForm(form: NgForm) {

    this.formProcessed = true;

    this.pianteService.ricercaPiante(this.modelSearch, this.appstate.currentVasca, (response) => {
      if(response.length>0){
        this.array_piante = response;
      } else {
        this.notify.showNotification("Nessuna pianta trovata", 'danger');
      }
    });
  }

  /**
   * Va nel dettaglio della pianta selezionata
   * @param piante 
   */
  onClick (piante) {

    this.appstate.currentPiante = piante; 
    this.appstate.canAdd = this.appstate.currentVasca!= null? true : false;
  }

  public get pianteservice() {
    
    return this.pianteService;
  }
}
