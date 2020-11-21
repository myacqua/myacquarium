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
  public ricercaPesce(modelSearch, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    this.backend.post('fishs/ricerca', {commonname: modelSearch.nomePesce}, new HttpParams() ).subscribe(
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
}
