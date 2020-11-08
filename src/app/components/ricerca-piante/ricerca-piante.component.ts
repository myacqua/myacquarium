import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-ricerca-piante',
  templateUrl: './ricerca-piante.component.html',
  styleUrls: ['./ricerca-piante.component.scss'],
})
export class RicercaPianteComponent implements OnInit {

  constructor(private appstate:AppStateService) { }

  ngOnInit() {
    console.log(this.appstate.state);
  }

}
