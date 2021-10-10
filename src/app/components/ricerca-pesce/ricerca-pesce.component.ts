import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PesciService } from 'src/app/_services/pesci.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-ricerca-pesce',
  templateUrl: './ricerca-pesce.component.html',
  styleUrls: ['./ricerca-pesce.component.scss'],
})
export class RicercaPesceComponent implements OnInit {

  array_pesci: any = [];

  formProcessed: boolean = false;

  //  Oggetto per la ricerca di un pesce
  public modelSearch = {
    nomePesce: "",
    validoVasca: false
  }

  constructor(private notify: AlertService, private appstate:AppStateService, private pesciService: PesciService) { }

  ngOnInit() { 

  }

  /**
   * Fa una ricerca per un pesce in base ai parametri di ricerca
   */
  processForm(form: NgForm) {

    this.formProcessed = true;

    this.pesciService.ricercaPesce(this.modelSearch, this.appstate.currentVasca, (response) => {
      if(response.length>0){
        this.array_pesci = response;
      } else {
        this.notify.showNotification("Nessun pesce trovato", 'danger');
      }
    });
    
  }

  /**
   * Va nel dettaglio del pesce selezionato
   * @param pesce 
   */
  onClick (pesce){

    this.appstate.currentPesce = pesce;
    this.appstate.canAdd = this.appstate.currentVasca!= null? true : false;
  }

  public get pesciservice() {

    return this.pesciService;
  }
}
