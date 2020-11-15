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
  public piante: any[] = [];
  public accessori: any[] = [];

  constructor() {

    this.piante = [
      {
        nome: "Ammannia gracilis",
      },
      {
        nome: "Anubias barteri var. barteri",
      },
    ];
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
