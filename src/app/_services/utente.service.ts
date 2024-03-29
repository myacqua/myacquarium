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
   * Recupera password dalla email
   * @param model 
   * @param callbackSuccess 
   * @param callbackError 
   */
  //  TODO:MICHELE: da terminare
  public passwordRecover(model, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    //  TODO_MARCO: cambiare l'url del recupera password
    this.backend.postAuth('recuperapassword', model, new HttpParams() ).subscribe(
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
        this.notify.showNetworkError("Attenzione", "Email non presente");
        this.backend.showErrors(error);
      }
    )
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
   * Autentica l'utente
   * @param model utente per l'autenticazione
   */
  public getUser(model, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    this.backend.post(`getUser?username=${model.username}`, {}, new HttpParams() ).subscribe(
      (response : any) => {
        if (typeof response != "undefined") {
          this.user = response;
          this.appState.saveUser(response.aaData);
          callbackSuccess(response.aaData);
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

  /**
   * Registra l'utente
   * @param model utente per registrarsi
   */
  public save(model, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    this.backend.postAuth('register', model, new HttpParams() ).subscribe(
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
