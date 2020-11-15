import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PesciService } from 'src/app/_services/pesci.service';

@Component({
  selector: 'app-ricerca-pesce',
  templateUrl: './ricerca-pesce.component.html',
  styleUrls: ['./ricerca-pesce.component.scss'],
})
export class RicercaPesceComponent implements OnInit {

  protected array_pesci = [];

  protected formProcessed: boolean = false;

  //  Oggetto per la ricerca di un pesce
  public modelSearch = {
    nomePesce: ""
  }

  constructor(private appstate:AppStateService, private pesciService: PesciService) { }

  ngOnInit() { }

  /**
   * Fa una ricerca per un pesce in base ai parametri di ricerca
   */
  processForm() {

    this.formProcessed = true;

    this.pesciService.ricercaPesce(this.modelSearch, (success) => {
      this.array_pesci = success;
    });
    
  }


  onClick (pesce){
    this.appstate.currentPesce = pesce;
  }


  public get pesciservice() {
    return this.pesciService;
  }



}
