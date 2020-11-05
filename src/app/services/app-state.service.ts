import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public acquarioCorrente: any = {};
  public state: string = "";

  constructor() { }
}
