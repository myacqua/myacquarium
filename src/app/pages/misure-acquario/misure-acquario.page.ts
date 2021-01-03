import { Component, OnInit } from '@angular/core';
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

  protected showTemperature = true;

  constructor(private appState: AppStateService, private vascheService: VascheService, private notify: AlertService) { }

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
}
