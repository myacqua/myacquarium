import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { AppStateService } from './appstate.service';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private loadingInProgress: boolean = false;

  private user : any = {};
  protected userID = 1;
  protected token = '';
  
  constructor(private backend: BackendService, private loading: LoadingService,private notify: AlertService, private appState: AppStateService) { }

  //  restituisce se ci sono chiamate in corso in questo service
  public get isLoading(): boolean {
    return this.loadingInProgress;
  }

  setLoading(toValue, withLoading: boolean = true) {

    if (toValue == true) {
      this.loadingInProgress = true;
      if (withLoading)
        this.loading.showFullLoading();
    } else {
      this.loadingInProgress = false;
      this.loading.hideLoading();
    }
  }

  /**
   * Autentica l'utente
   * @param model utente per l'autenticazione
   */
  public authenticate(model, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    this.backend.postAuth('authenticate', model, new HttpParams() ).subscribe(
      (response : any) => {
        if (typeof response != "undefined") {
          this.user = response;
          this.appState.saveUser(response);
          this.backend.setToken(response.token);
          callbackSuccess(response);
        } else
          callbackError();
          
        this.setLoading(false);
      }, 
      (error) => {
        console.log(error)
        callbackError();
        this.setLoading(false);
        this.notify.showNetworkError("Attenzione", "Nome utente o password errate");
        this.backend.showErrors(error);
      }
    )
  }

  /**
   * Non autentica l'utente
   */
  public logout() {
    this.appState.clearAndDelete()
    this.backend.removeToken();
  }


  /**
   * Registra l'utente
   * @param model utente per registrarsi
   */
  public register(model, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    this.backend.post('authenticate', null, new HttpParams() ).subscribe(
      (response : any) => {
        if (typeof response != "undefined") 
          callbackSuccess(response);
        else
          callbackError();
          
        this.setLoading(false);
      }, 
      (error) => {
        console.log(error)
        callbackError();
        this.setLoading(false);
        this.backend.showErrors(error);
      }
    )
  }

  
}
