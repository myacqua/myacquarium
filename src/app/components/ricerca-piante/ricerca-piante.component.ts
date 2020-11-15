import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';

@Component({
  selector: 'app-ricerca-piante',
  templateUrl: './ricerca-piante.component.html',
  styleUrls: ['./ricerca-piante.component.scss'],
})
export class RicercaPianteComponent implements OnInit {

  public array_piante = [];

  constructor(private appstate:AppStateService) { }
   
   
   ngOnInit() { }


   onClick (piante) {
    this.appstate.currentPiante = piante; 
  }

}
