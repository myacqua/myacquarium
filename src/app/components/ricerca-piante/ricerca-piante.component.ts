import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { PianteService } from 'src/app/_services/piante.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/_services/alert.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-ricerca-piante',
  templateUrl: './ricerca-piante.component.html',
  styleUrls: ['./ricerca-piante.component.scss'],
})
export class RicercaPianteComponent implements OnInit {

  @ViewChild('searchInput', { read: ElementRef }) searchInput: ElementRef;

  array_piante: any = [];

  formProcessed: boolean = false;
  
    //  Oggetto per la ricerca di una pianta
  public modelSearch = {
    nomePiante: "",
    validoVasca: false
  }

  constructor(private notify: AlertService, private appstate:AppStateService, private pianteService: PianteService) { }

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
   * Fa una ricerca per una pianta in base ai parametri di ricerca
   */
  processForm() {

    this.formProcessed = true;

    //  TODO_MICHELE: aggiungere la cancellazione dei filtri
    if (this.modelSearch.nomePiante.length < 3)
      return;

    this.pianteService.ricercaPiante(this.modelSearch, this.appstate.currentVasca, (response) => {
      if(response.length>0){
        this.array_piante = response;
      } else {
        this.notify.showNotification("Nessuna pianta trovata", 'danger');
      }
    });
  }

  onClickSearch() {
    this.processForm();
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
