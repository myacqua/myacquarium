import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { VascheService } from 'src/app/_services/vasche.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  array_vasche: any = [];

  constructor(private vascheService: VascheService, private appState: AppStateService, private router:Router, private notify: AlertService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

    this.appState.clearState();

    this.vascheService.recuperaVasche((response) => {
      this.array_vasche = response;
    }, (error) => {
      if (error.status != 401)
        this.notify.showNetworkError("Impossibile recuperare le vasche", '');
    });
  }

  vascaOnclick (vascaPremuta) {
    this.appState.currentVasca = vascaPremuta;
    this.router.navigate(['gestisci-acquario']);
  }


  public get vascheservice () {
    return this.vascheService;
  }

}
