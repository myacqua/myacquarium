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

  constructor(private appState: AppStateService, private vascheService: VascheService, private notify: AlertService) { }

  ngOnInit() {
        
  }

  ionViewWillEnter() {
    if (this.appState.currenVasca) {
      this.acquario = this.appState.currenVasca;
      this.vascheService.recuperaSingolaVasca(this.acquario.id, (response) => {
        this.acquario = response;
      }, () => {
        this.notify.showNotification("Vasca non presente", 'danger');
      });
    }
  }

  onClickPesce (pesce){
    this.appState.currentPesce = pesce;
    this.appState.searchState = 'pesci';
  }

  onClickPianta (pianta) {
    this.appState.currentPiante = piante; 
    this.appState.searchState = 'piante';
  }

  onClickAdd (typeAdd) {
    console.log("#### onClickAdd "+typeAdd);
    this.appState.searchState = typeAdd;
  }

}
