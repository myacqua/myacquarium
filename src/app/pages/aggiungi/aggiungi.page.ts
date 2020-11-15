import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.page.html',
  styleUrls: ['./aggiungi.page.scss'],
})
export class AggiungiPage implements OnInit {

  constructor(private appstate:AppStateService) { }

  ngOnInit() {
  }

  onClick(tipo: string) {
    this.appstate.state = tipo;
  }

}
