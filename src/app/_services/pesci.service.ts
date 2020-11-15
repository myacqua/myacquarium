import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PesciService {

  constructor(private backend: BackendService) { }

  
  /**
   * 
   * @param modelSearch Ricerca di un pesce con parametri
   */
  public ricercaPesce(modelSearch, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

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
      }
    )
  }
}
