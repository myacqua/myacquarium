import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public acquarioCorrente: any = {};
  public state: string = "";

  //  oggetti acquario
  public pesci: any[] = [];
  public piante: any[] = [];
  public accessori: any[] = [];

  constructor() { 

    this.pesci = [
      {
        nome: "Carassio dorato o pesce rosso",
        dominio: "Eukaryota",
        regno: "Animalia",
        phylum: "Chordata",
        classe: "Actinopterygii",
        ordine: "Perciformes",
        famiglia: "Cyprinidae",
        genere: "Carassius"
      },
      {
        nome: "Scalare",
        dominio: "Eukaryota",
        regno: "Animalia",
        phylum: "chordata",
        classe: "Actinopterygii",
        ordine: "Perciformes",
        famiglia: "Ciclidae",
        genere: "Pterophyllum"
      }
    ];
  }
}
