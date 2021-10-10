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
  public ricercaPiante(modelSearch, currentVasca, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);
    
    var identificativo = currentVasca!=null ? currentVasca.id : "";
    this.backend.post('plants/ricerca?identificativo='+identificativo+'&scientificName='+modelSearch.nomePiante+'&validoVasca='+modelSearch.validoVasca, null, new HttpParams() ).subscribe(
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
        this.backend.showErrors(error);
      }
    )
  }
}
