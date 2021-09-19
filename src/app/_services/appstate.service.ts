import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  public searchState: string = "";
  public currentPesce: any = {}
  public currentPiante: any = {};
  public currentAccessori: any = {};
  public currentVasca: null;
  public canDelete : boolean = false;
  public canAdd : boolean = false;

  //  oggetti acquario
  public accessori: any[] = [];

  constructor() {
  }

  public clearState() {
    this.searchState = "";
    this.currentPesce = {};
    this.currentPiante = {};
    this.currentAccessori = {};
    this.currentVasca = null;
    this.canDelete = false;
    this.canAdd = false;
    this.accessori = [];

  }
}
