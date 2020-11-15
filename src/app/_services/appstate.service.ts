import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  public acquarioCorrente: any = {};
  public state: string = "";
  public currentPesce: {};
  public currentPiante: {};
  public currentAccessori: {};

  //  oggetti acquario
  
  public accessori: any[] = [];

  constructor() {

    
    this.accessori = [
      {
        nome: "acquario",
      },
      {
        nome: "filtro",
      },
    ];
  }
}
