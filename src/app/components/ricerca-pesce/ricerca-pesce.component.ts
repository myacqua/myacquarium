import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PesciService } from 'src/app/_services/pesci.service';
import { AlertService } from 'src/app/_services/alert.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-ricerca-pesce',
  templateUrl: './ricerca-pesce.component.html',
  styleUrls: ['./ricerca-pesce.component.scss'],
})
export class RicercaPesceComponent implements OnInit {

  @ViewChild('searchInput', { read: ElementRef }) searchInput: ElementRef;

  array_pesci: any = [];

  formProcessed: boolean = false;

  //  Oggetto per la ricerca di un pesce
  public modelSearch = {
    nomePesce: "",
    validoVasca: false
  }

  constructor(private notify: AlertService, private appstate:AppStateService, private pesciService: PesciService) { }

  ngOnInit() { 

    //  TODO_MICHELE: attenzione a controllare quando diventa disponibile la search box
    setTimeout(() => {
      
      //  mi registro all'evento di keyup della barra di ricerca
      fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(800)
      ).subscribe(() => this.onClickSearch())
    }, 1000);

  }



  /**
   * Fa una ricerca per un pesce in base ai parametri di ricerca
   */
  processForm() {

    this.formProcessed = true;
    
    //  TODO_MICHELE: aggiungere la cancellazione dei filtri
    if (this.modelSearch.nomePesce.length < 3)
      return;

    this.pesciService.ricercaPesce(this.modelSearch, this.appstate.currentVasca, (response) => {
      if(response.length > 0){
        this.array_pesci = response;
      } else {
        this.notify.showNotification("Nessun pesce trovato", 'danger');
      }
    });
    
  }


  onClickSearch() {
    this.processForm();
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
