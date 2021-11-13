import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { VascheService } from 'src/app/_services/vasche.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-selezione-oggetto',
  templateUrl: './selezione-oggetto.page.html',
  styleUrls: ['./selezione-oggetto.page.scss'],
})
export class SelezioneOggettoPage implements OnInit {

  private loadingInProgress: boolean = false;

  constructor(private notify: AlertService, private appState:AppStateService,private vascheService:VascheService, private router: Router,
                private loading: LoadingService, private alert: AlertService, private alertController: AlertController) { }

  ngOnInit() {
  
  }

  //  restituisce se ci sono chiamate in corso in questo service
  public get isLoading(): boolean {
    return this.loadingInProgress;
  }
  setLoading(toValue) {

    if (toValue == true) {
      this.loadingInProgress = true;
      this.loading.showFullLoading();
    } else {
      this.loadingInProgress = false;
      this.loading.hideLoading();
    }
  }

  showConfirm(messageAlert) {
    this.alertController.create({
      header: 'Conferma Inserimento',
      subHeader: messageAlert,
      message: 'Sei sicuro di voler aggiungere un Vivo?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Let me think');
          }
        },
        {
          text: 'SI',
          handler: () => {
            if (this.appState.currentPesce != null) {
              /**INSERISCO PESCE**/
              this.vascheService.aggiungiPesce(this.appState.currentVasca, this.appState.currentPesce, (success) => {
                this.notify.showNotification("Pesce aggiunto alla vasca","success");
                this.router.navigate(['gestisci-acquario']);
              }, (error) => {
                //  TODO aggiungere il messaggio di errore che arriva dal backend
                console.log(error);
                this.setLoading(false);
                this.alert.showError("Impossibile aggiungere il pesce", "");
              });
            } else if (this.appState.currentPiante != null) {
              /**INSERISCO PIANTA**/
              this.vascheService.aggiungiPianta(this.appState.currentVasca, this.appState.currentPiante, (success) => {
                this.notify.showNotification("Pianta aggiunta alla vasca", "success");
                this.router.navigate(['gestisci-acquario']);
              }, 
              (error) => {
                console.log(error.message);
                this.setLoading(false);
                this.alert.showError("Impossibile aggiungere la pianta", error.message);
              });
            }
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  addVivo (){
    
    if ( this.appState.canAdd ) {
      /**INSERISCO**/
      var message = "";
      if (this.appState.currentPesce!=null) {
        if (this.appState.currentPesce.volumeAlert || this.appState.currentPesce.temperatureAlert || 
              this.appState.currentPesce.phAlert || this.appState.currentPesce.ghAlert) {
          if (this.appState.currentPesce.volumeAlert) message = "Il volume della vasca non consente di inserire il pesce";
          else if (this.appState.currentPesce.phAlert) message = "Il PH della vasca non consente di inserire il pesce";
          else if (this.appState.currentPesce.ghAlert) message = "Il GH della vasca non consente di inserire il pesce";
          else if (this.appState.currentPesce.temperatureAlert) message = "La temperatura della vasca non consente di inserire il pesce";
        } 
      } else if (this.appState.currentPiante!=null) {
        if (this.appState.currentPiante.khAlert || this.appState.currentPiante.temperatureAlert || 
            this.appState.currentPiante.phAlert || this.appState.currentPiante.ghAlert) {
          if (this.appState.currentPiante.khAlert) message = "Il KH della vasca non consente di inserire la pianta";
          else if (this.appState.currentPiante.phAlert) message = "Il PH della vasca non consente di inserire la pianta";
          else if (this.appState.currentPiante.ghAlert) message = "Il GH della vasca non consente di inserire la pianta";
          else if (this.appState.currentPiante.temperatureAlert) message = "La temperatura della vasca non consente di inserire la pianta";
        }
      } 
      this.showConfirm(message);
    }
  }

  

  loadData(event) {

  }

  deleteVivo (){

    if (this.appState.canDelete) {
      /**ELIMINO**/
      if (this.appState.currentPesce!=null) {
        /**ELIMINO PESCE**/
        this.vascheService.eliminaPesce(this.appState.currentVasca, this.appState.currentPesce, (success) => {
          this.notify.showNotification("Pesce eliminato dalla vasca", "success");
          this.router.navigate(['gestisci-acquario']);
        });
      } else if (this.appState.currentPiante!=null) {
        /**ELIMINO PIANTA**/
        this.vascheService.eliminaPianta(this.appState.currentVasca, this.appState.currentPiante, (success) => {
          this.notify.showNotification("Pianta eliminata dalla vasca", "success");
          this.router.navigate(['gestisci-acquario']);
        });
      }
    }
  }

  
  getAppstate() {
    
    return this.appState;
  }

}
