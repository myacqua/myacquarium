import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PianteService {

  constructor(private backend: BackendService) { }

  
  /**
   * 
   * @param modelSearch Ricerca di una pianta con parametri
   */
  public ricercaPiante(modelSearch, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

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
      }
    )
  }
}