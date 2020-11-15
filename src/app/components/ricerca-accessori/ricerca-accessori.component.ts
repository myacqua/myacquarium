import { Component, OnInit } from "@angular/core";
import { AppStateService } from "src/app/_services/appstate.service";
@Component({
  selector: "app-ricerca-accessori",
  templateUrl: "./ricerca-accessori.component.html",
  styleUrls: ["./ricerca-accessori.component.scss"],
})
export class RicercaAccessoriComponent implements OnInit {
  public array_accessori = [];

  constructor(private appstate: AppStateService) {}

  ngOnInit() {}

  onClick(accessori) {
    this.appstate.currentAccessori = accessori;
  }
}
