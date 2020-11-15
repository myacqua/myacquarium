import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.page.html',
  styleUrls: ['./ricerca.page.scss'],
})
export class RicercaPage implements OnInit {

  constructor(private appstate:AppStateService) { 
  }

  ngOnInit() {
    console.log(this.appstate.searchState);
  }

  public get appState() {
    return this.appstate;
  }

}
