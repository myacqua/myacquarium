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
  
  private userDBString = "db_user";
  private userState: any = {};

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

  //  pulisce lo stato dell'applicazione e cancella i file locali
  public clearAndDelete() {
    
    this.clearState();
    this.deleteUser();
  }

  //  Recupera un utente memorizzato
  public get user () {
    if (this.userState && Object.keys(this.userState).length > 0)
      return this.userState;

    let userJSON = localStorage.getItem(this.userDBString);
    if (userJSON) {
      return this.userState = JSON.parse(userJSON);
    }

    return {};
  }

  //  salva un nuovo utente
  public saveUser(modelUser: any)  {
    localStorage.setItem(this.userDBString, JSON.stringify(modelUser));
    this.userState = modelUser;
  }

  public deleteUser() {
    localStorage.removeItem(this.userDBString);
  }
}
