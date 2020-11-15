import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PesciService } from 'src/app/_services/pesci.service';

@Component({
  selector: 'app-ricerca-pesce',
  templateUrl: './ricerca-pesce.component.html',
  styleUrls: ['./ricerca-pesce.component.scss'],
})
export class RicercaPesceComponent implements OnInit {

  public array_pesci = [];

  //  Oggetto per la ricerca di un pesce
  public modelSearch = {
    nomePesce: ""
  }

  constructor(private appstate:AppStateService, private pesciService: PesciService) { }

  ngOnInit() { }


  /**
   * Fa una ricerca per un pesce in base ai parametri di ricerca
   */
  searchPesce() {

    this.pesciService.ricercaPesce(this.modelSearch, (success) => {
      this.array_pesci = success;
    });
    
  }


  onClick (pesce){
    this.appstate.currentPesce = pesce;
  }



}
