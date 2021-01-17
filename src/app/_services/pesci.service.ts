import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  public ricercaPesce(modelSearch, currentVasca ,callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativo = currentVasca!=null ? currentVasca.id : "";
    this.backend.post('fishs/ricerca?identificativo='+identificativo+'&commonName='+modelSearch.nomePesce, null, new HttpParams() ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData);
        else
          callbackError();
          
        this.setLoading(false);
      }, 
      (error) => {
        console.log(error);
        callbackError();
        this.setLoading(false);
        this.backend.showErrors(error, true);
      }
    )
  }

}
