import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';

@Component({
  selector: 'app-scheda-piante',
  templateUrl: './scheda-piante.component.html',
  styleUrls: ['./scheda-piante.component.scss'],
})
export class SchedaPianteComponent implements OnInit {

  private piante = {}
 
  constructor(private appstate:AppStateService) { }

  ngOnInit() {
    this.piante = this.appstate.currentPiante;

    console.log(this.appstate.currenVasca)
  }
  getAppState() {
    return this.appstate;
}
}
