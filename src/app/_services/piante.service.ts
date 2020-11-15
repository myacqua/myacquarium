import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class PianteService {

  private loadingInProgress: boolean = false;

  constructor(private backend: BackendService, private loading: LoadingService) { }

  //  restituisce se ci sono chiamate in corso in questo service
  public get isLoading(): boolean {
    return this.loadingInProgress;
  }

  setLoading(toValue) {

    if (toValue == true) {
      this.loadingInProgress = true;
      this.loading.showFullLoading();
    } else {
      this.loadingInProgress = false;
      this.loading.hideLoading();
    }
  }

  /**
   * 
   * @param modelSearch Ricerca di una pianta con parametri
   */
  public ricercaPiante(modelSearch, callbackSuccess: any = () => {}, callbackError: any = () => {}, callbackFinal = () => {}) {

    this.setLoading(true);

    //  creo l'url con i parametri
    let url = 'plants?commonname='+modelSearch.nomePiante;

    this.backend.post(url, {commonname: modelSearch.nomePiante}, new HttpParams() ).subscribe(
      (success : any) => {
        if (success != null && typeof success.aaData != "undefined") 
          callbackSuccess(success.aaData);
      }, 
      (error) => {
        console.log(error)
        callbackError();
      },
      () => {
        this.setLoading(false);
        callbackFinal()
      }
    )
  }
}
