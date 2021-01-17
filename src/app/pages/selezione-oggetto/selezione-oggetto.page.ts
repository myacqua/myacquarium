import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { VascheService } from 'src/app/_services/vasche.service';

@Component({
  selector: 'app-selezione-oggetto',
  templateUrl: './selezione-oggetto.page.html',
  styleUrls: ['./selezione-oggetto.page.scss'],
})
export class SelezioneOggettoPage implements OnInit {

  constructor(private notify: AlertService, private appState:AppStateService,private vascheService:VascheService, private router: Router) { }

  ngOnInit() {
  
  }

  addVivo (){
    
    if ( this.appState.canAdd ) {
      /**INSERISCO**/
      if (this.appState.currentPesce!=null) {
        /**INSERISCO PESCE**/
        this.vascheService.aggiungiPesce(this.appState.currentVasca, this.appState.currentPesce, (success) => {
          if (success){
            this.notify.showNotification("Pesce aggiunto alla vasca");
            this.router.navigate(['gestisci-acquario']);
          } else {
            this.notify.showNotification("Il pesce non rispetta i parametri"); 
          }


        });
      } else if (this.appState.currentPiante!=null) {
        /**INSERISCO PIANTA**/
        this.vascheService.aggiungiPianta(this.appState.currentVasca, this.appState.currentPiante, (success) => {
          this.notify.showNotification("Pianta aggiunta alla vasca");
          this.router.navigate(['gestisci-acquario']);
        });
      }
    }
  }

  deleteVivo (){

    if (this.appState.canDelete) {
      /**ELIMINO**/
      if (this.appState.currentPesce!=null) {
        /**ELIMINO PESCE**/
        this.vascheService.eliminaPesce(this.appState.currentVasca, this.appState.currentPesce, (success) => {
          this.notify.showNotification("Pesce eliminato alla vasca");
          this.router.navigate(['gestisci-acquario']);
        });
      } else if (this.appState.currentPiante!=null) {
        /**ELIMINO PIANTA**/
        this.vascheService.eliminaPianta(this.appState.currentVasca, this.appState.currentPiante, (success) => {
          this.notify.showNotification("Pianta eliminata dalla vasca");
          this.router.navigate(['gestisci-acquario']);
        });
      }
    }
  }

  
  getAppstate() {
    
    return this.appState;
  }

}
