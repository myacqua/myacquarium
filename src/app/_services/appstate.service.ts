import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  public acquarioCorrente: any = {};
  public searchState: string = "";
  public currentPesce: {};
  public currentPiante: {};
  public currentAccessori: {};
  public currenVasca: null;

  //  oggetti acquario
  
  public accessori: any[] = [];

  constructor() {

  }
}
