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

    var obj = {"id":null,
      "commonName":modelSearch.nomePesce,
      "scientificName":null,
      "synonymous":null,
      "originZone":null,
      "origin":null,
      "familyId":null,
      "maxLength":null,
      "tankMinLength":null,
      "tankMinVolume":null,
      "temperatureMin":null,
      "temperatureMax":null,
      "phMin":null,
      "phMax":null,
      "ghMin":null,
      "ghMax":null,
      "waterFlow":null,
      "tankLevel":null,
      "description":null,
      "temperament":null,
      "careLevel":null,
      "aquariumType":null,
      "diet":null,
      "minNumber":null
    };
    this.backend.post('fishs/ricerca', obj, new HttpParams() ).subscribe(
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
