import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { VascheService } from 'src/app/_services/vasche.service';

@Component({
  selector: 'app-misure-acquario',
  templateUrl: './misure-acquario.page.html',
  styleUrls: ['./misure-acquario.page.scss'],
})
export class MisureAcquarioPage implements OnInit {

  acquario: any = {};

  protected formProcessed: boolean = false;

  protected showTemperature = true;

      //  Oggetto per la ricerca di una pianta
  public modelMisura = {
    valore: "",
    unita: "",
    tipo: ""
  }

  constructor(private appState: AppStateService, private vascheService: VascheService, private notify: AlertService, 
      private router: Router, private location:Location) { }

  ngOnInit() {

    if (this.appState.currentVasca) {
      this.acquario = this.appState.currentVasca;
      this.vascheService.recuperaSingolaVasca(this.acquario.id, (response) => {
        this.acquario = response;
      }, () => {
        this.notify.showNotification("Vasca non presente", 'danger');
      });
    }
    
  }

  processForm(form) {

    if (form.form.valid)
    {
      this.vascheService.aggiungiMisurazione(this.appState.currentVasca, this.modelMisura, (response) => {
        //this.appState.currentVasca = response;
        this.notify.showNotification("Vasca Aggiornata", 'success');
        //this.location.back();
        this.router.navigate(['gestisci-acquario']);
      }, () => {
        this.notify.showNotification("Errore nell'aggiornamento della vasca", 'danger');
      });
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }     

  deleteMeasure(idMisura) {

    this.vascheService.rimuoviMisurazione(this.appState.currentVasca, idMisura, (response) => {
      //this.appState.currentVasca = response;
      this.notify.showNotification("Vasca Aggiornata", 'success');
      //this.location.back();
      this.router.navigate(['gestisci-acquario']);
    }, () => {
      this.notify.showNotification("Errore nell'aggiornamento della vasca", 'danger');
    });
  }  


  pianificaMisurazione() {
    
  }
}
