import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-ricerca-pesce',
  templateUrl: './ricerca-pesce.component.html',
  styleUrls: ['./ricerca-pesce.component.scss'],
})
export class RicercaPesceComponent implements OnInit {

  private array_pesci =[];

  constructor(private appstate:AppStateService) { }

  ngOnInit() {
    this.array_pesci = this.appstate.pesci;
  }

  onClick (pesce){
    this.appstate.currentPesce = pesce;
  }

}
