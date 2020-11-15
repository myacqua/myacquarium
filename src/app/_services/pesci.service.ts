import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class PesciService {

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
   * @param modelSearch Ricerca di un pesce con parametri
   */
  public ricercaPesce(modelSearch, callbackSuccess: any = () => {}, callbackError: any = () => {}, callbackFinal = () => {}) {

    this.setLoading(true);

    //  creo l'url con i parametri
    let url = 'fishs?commonname='+modelSearch.nomePesce;

    this.backend.post(url, {commonname: modelSearch.nomePesce}, new HttpParams() ).subscribe(
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
