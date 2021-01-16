import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  private loadingInProgress: boolean = false;

  protected userID = 1;
  protected token = '';
  
  constructor(private backend: BackendService, private loading: LoadingService,private storage: Storage) { }

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
          this.backend.setProp('access_token', response.token);
          this.backend.token = response.token;
          callbackSuccess(response);
        } else
          callbackError();
          
        this.setLoading(false);
      }, 
      (error) => {
        console.log(error)
        callbackError();
        this.setLoading(false);
      }
    )
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
      }
    )
  }

  
}
