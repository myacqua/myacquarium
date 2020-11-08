import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-scheda-accessori',
  templateUrl: './scheda-accessori.component.html',
  styleUrls: ['./scheda-accessori.component.scss'],
})
export class SchedaAccessoriComponent implements OnInit {

private accessori ={}

  constructor(private appstate:AppStateService) { }

  ngOnInit() {
    
    this.accessori = this.appstate.currentAccessori;
  }

}
