import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-scheda-pesce',
  templateUrl: './scheda-pesce.component.html',
  styleUrls: ['./scheda-pesce.component.scss'],
})
export class SchedaPesceComponent implements OnInit {
  private pesce = {}
  constructor(private appstate:AppStateService) { }

  ngOnInit() {
    this.pesce = this.appstate.currentPesce;
  }

}
