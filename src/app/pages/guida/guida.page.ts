import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
@Component({
  selector: 'app-guida',
  templateUrl: './guida.page.html',
  styleUrls: ['./guida.page.scss'],
})
export class GuidaPage implements OnInit {

  constructor(private appstate:AppStateService) { }


  ngOnInit() {
    this.appstate.canAdd = false;
    this.appstate.canDelete = false;
  }
  loadData(event) {
    
  }

  public get appState() {

    return this.appstate;
  }

}
