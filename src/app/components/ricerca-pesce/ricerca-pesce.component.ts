import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PesciService } from 'src/app/_services/pesci.service';

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
    nomePesce: ""
  }

  constructor(private appstate:AppStateService, private pesciService: PesciService) { }

  ngOnInit() { 

  }

  /**
   * Fa una ricerca per un pesce in base ai parametri di ricerca
   */
  processForm(form: NgForm) {

    this.formProcessed = true;

    this.pesciService.ricercaPesce(this.modelSearch, this.appstate.currentVasca, (success) => {

      this.array_pesci = success;
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
