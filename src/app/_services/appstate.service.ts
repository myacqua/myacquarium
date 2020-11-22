import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  public searchState: string = "";
  public currentPesce: {};
  public currentPiante: {};
  public currentAccessori: {};
  public currenVasca: null;

  //  oggetti acquario
  public accessori: any[] = [];

  constructor() {
  }

  public clearState() {
    this.searchState = "";
    this.currentPesce = {};
    this.currentPiante = {};
    this.currentAccessori = {};
    this.currenVasca = null;
    
    this.accessori = [];

  }
}
