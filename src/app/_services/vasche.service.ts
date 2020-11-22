import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class VascheService {

  private loadingInProgress: boolean = false;

  protected userID = 1;

  constructor(private backend: BackendService, private loading: LoadingService) { }

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
   * Questo metodo recupera tutte le vasche per l'utente loggato
   * @param callbackSuccess 
   * @param callbackError 
   */
  public recuperaVasche(callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true, false);

    this.backend.post('tanks/recupera?identificativo=&identificativoUtente='+this.userID, new HttpParams() ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData);
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


  /**
   * Salva o aggiorna una vasca
   * @param model 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public saveVasca(model: any, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    model.idUtente = this.userID;

    this.setLoading(true, true);

    this.backend.post('tanks/save', model ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData);
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



  /**
   * Recupera la vasca singola
   * @param vascaID 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public recuperaSingolaVasca(vascaID: string, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true, true);

    this.backend.post('tanks/recupera?identificativo='+vascaID+'&identificativoUtente='+this.userID, new HttpParams() ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData[0]);
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


  /**
   * Cancella una vasca
   * @param vascaID 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public cancellaVasca(vascaID: string, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true, true);

    this.backend.post('tanks/delete?idTank='+vascaID, {idTank: vascaID} ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData[0]);
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
