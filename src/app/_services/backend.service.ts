import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AlertService } from "./alert.service";
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';

import { Plugins } from '@capacitor/core';
const { Network } = Plugins;

@Injectable({ providedIn: "root" })
export class BackendService {

  networkHandler: any = null;

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private router: Router,
    private storage: Storage
  ) {
    this.getNetworkStatus();
    this.networkHandler = Network.addListener('networkStatusChange', (status) => { });
  }

  private async getNetworkStatus() {
    this.networkHandler = await Network.getStatus();
  }

  public get isConnected() {
    if (this.networkHandler != null) {
      return this.networkHandler.connected;
    }

    return false;
  }

  setupParams(searchParams: HttpParams) {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.getToken())
      headers = headers.set("Authorization", "Bearer " + this.getToken());
    let options: any = { headers: headers, responseType: 'json', observe: 'body', params: searchParams };

    return options;
  }

  get(resource: string, searchParams: HttpParams = new HttpParams()) {
    let options = this.setupParams(searchParams);

    return this.http.get(environment.apiUrl + resource, options);
  }

  post(resource: string, body: any, searchParams: HttpParams = new HttpParams()) {
    console.log("###POST");
    let options = this.setupParams(searchParams);
    return this.http.post(
      environment.apiUrl + resource,
      JSON.stringify(body),
      options
    );
  }

  postAuth(resource: string, body: any, searchParams: HttpParams = new HttpParams()) {
    let options = this.setupParams(searchParams);
    return this.http.post(
      environment.apiAuthUrl + resource,
      JSON.stringify(body),
      options
    );
  }

  showErrors(error: any, withAlert: boolean = false) {

    let errorJson = error.error;

    //  se arriva un valore con utente non valido allora devo resettare l'applicazione
    if (error.status == 401) {

      if (withAlert)
        this.alertService.showSessionError("SESSIONE UTENTE SCADUTA", "Effetuare nuovamente l'accesso");

      this.router.navigate(['/login'], { replaceUrl: true });
      return;
    }

    if (error != null && errorJson.description) {
      if (withAlert)
        this.alertService.showNetworkError(errorJson.error, errorJson.description);
      return;
    }

    if (withAlert)
      this.alertService.showNetworkError("ERRORE IMPREVISTO", "Contatta il supporto");
  }

  public getToken(){
    return localStorage.getItem('access_token');
  }
  public setToken(token: any) {
    localStorage.setItem('access_token', token);
  }

  setProp(key: any,value: any ) {
    this.storage.set('${key',value);
  }
  getProp(key: any) {

    this.storage.get('${key').then((val) => {
      console.log('Your '+key+' is', val);
      return val;
    });
  }
}



