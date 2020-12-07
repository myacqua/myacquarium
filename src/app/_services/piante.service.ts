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
  public ricercaPiante(modelSearch, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    
    var obj = {"id":null,
                "commonName":null,
                "scientificName":modelSearch.nomePiante,
                "originZone":null,
                "origin":null,
                "familyId":null,
                "minHeight":null,
                "maxHeight":null,
                "temperatureMin":null,
                "temperatureMax":null,
                "phMin":null,
                "phMax":null,
                "ghMin":null,
                "ghMax":null,
                "khMin":null,
                "khMax":null,
                "lighting":null,
                "co2":null,
                "description":null,
                "growThrate":null,
                "careLevel":null,
                "type":null
    }; 

    this.backend.post('plants/ricerca', obj, new HttpParams() ).subscribe(
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
