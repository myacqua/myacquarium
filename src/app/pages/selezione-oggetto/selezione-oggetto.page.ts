import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';

@Component({
  selector: 'app-selezione-oggetto',
  templateUrl: './selezione-oggetto.page.html',
  styleUrls: ['./selezione-oggetto.page.scss'],
})
export class SelezioneOggettoPage implements OnInit {

  constructor(private appState:AppStateService) { }

  ngOnInit() {

  }

  public get appstate() {
    return this.appState;
  }

}
