import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class VascheService {

  private loadingInProgress: boolean = false;

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
   * 
   */
  public recuperaVasche(callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    let userId = 1;

    this.setLoading(true, false);

    this.backend.post('tanks/recupera?identificativo=&identificativoUtente='+userId, new HttpParams() ).subscribe(
      (success : any) => {
        if (success != null && typeof success.aaData != "undefined") 
          callbackSuccess(success.aaData);
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
