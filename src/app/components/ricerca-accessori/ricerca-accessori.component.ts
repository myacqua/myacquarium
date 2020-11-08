import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/appstate.service';
@Component({
  selector: 'app-ricerca-accessori',
  templateUrl: './ricerca-accessori.component.html',
  styleUrls: ['./ricerca-accessori.component.scss'],
})
export class RicercaAccessoriComponent implements OnInit {
  private array_accessori =[];
  constructor(private appstate:AppStateService) { }

  ngOnInit() {
    this.array_accessori = this.appstate.accessori;
  }
  onClick (accessori) {
    this.appstate.currentAccessori = accessori; 
  }
}
