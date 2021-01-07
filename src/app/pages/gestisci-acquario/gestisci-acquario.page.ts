import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { VascheService } from 'src/app/_services/vasche.service';

@Component({
  selector: 'app-gestisci-acquario',
  templateUrl: './gestisci-acquario.page.html',
  styleUrls: ['./gestisci-acquario.page.scss'],
})
export class GestisciAcquarioPage implements OnInit {

  acquario: any = {};
  misure: any = {};
  misuraPh : any = "";
  misuraGh : any = "";
  misuraKh : any = "";
  misuraTemperatura : any = "";

  constructor(private appState: AppStateService, private vascheService: VascheService, private notify: AlertService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {

    if (this.appState.currentVasca) {
      this.acquario = this.appState.currentVasca;
      this.vascheService.recuperaSingolaVasca(this.acquario.id, (response) => {
        this.acquario = response;

        /**Recupero le misure della vasca**/
        this.vascheService.recuperaUltimeMisureVasca(this.acquario.id, (response) => {
          this.misure = response;
          
          for (let i=0;i<this.misure.length;i++) {

            var misura = this.misure[i];
            if (misura.tipo=='PH') this.misuraPh = misura.valore;
            else if (misura.tipo=='GH') this.misuraGh = misura.valore;
            else if (misura.tipo=='KH') this.misuraKh = misura.valore;
            else if (misura.tipo=='TEMPERATURA') this.misuraTemperatura = misura.valore;
          };

        }, () => {
          this.notify.showNotification("Misure vasca non presenti", 'danger');
        });

      }, () => {
        this.notify.showNotification("Vasca non presente", 'danger');
      });
    }
  }

  onClickPesce (pesce){

    this.appState.canAdd = false;
    this.appState.canDelete = true;
    this.appState.currentPesce = pesce;
    this.appState.currentPiante = null;
    this.appState.searchState = 'pesci';
  }

  onClickPianta (pianta) {

    this.appState.canAdd = false;
    this.appState.canDelete = true;
    this.appState.currentPesce = null;
    this.appState.currentPiante = pianta; 
    this.appState.searchState = 'piante';
  }

  onClickAdd (typeAdd) {

    this.appState.canAdd = true;
    this.appState.canDelete = false;
    this.appState.currentPesce = null;
    this.appState.currentPiante = null;
    this.appState.searchState = typeAdd;
  }

}
