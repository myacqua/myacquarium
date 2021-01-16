import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class VascheService {

  private loadingInProgress: boolean = false;

  protected userID = 1;

  constructor(private backend: BackendService, private loading: LoadingService) { }

  //  restituisce se ci sono chiamate in corso in questo service
  public get isLoading(): boolean {
    return this.loadingInProgress;
  }

  setLoading(toValue, withLoading: boolean = true) {

    if (toValue == true) {
      this.loadingInProgress = true;
      if (withLoading)
        this.loading.showFullLoading();
    } else {
      this.loadingInProgress = false;
      this.loading.hideLoading();
    }
  }

  /**
   * Questo metodo recupera tutte le vasche per l'utente loggato
   * @param callbackSuccess 
   * @param callbackError 
   */
  public recuperaVasche(callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true, false);

    this.backend.post('tanks/recupera?identificativo=&identificativoUtente='+this.userID, new HttpParams() ).subscribe(
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


  /**
   * Salva o aggiorna una vasca
   * @param model 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public saveVasca(model: any, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    model.idUtente = this.userID;

    this.setLoading(true, true);

    this.backend.post('tanks/save', model ).subscribe(
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



  /**
   * Recupera la vasca singola
   * @param vascaID 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public recuperaSingolaVasca(vascaID: string, callbackSuccess: any = () => {}, callbackError: any = () => {}) {
    this.setLoading(true, true);

    this.backend.post('tanks/recupera?identificativo='+vascaID+'&identificativoUtente='+this.userID, new HttpParams() ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData[0]);
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

  /**
   * Recupera le ultime misure della vasca
   * @param vascaID 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public recuperaUltimeMisureVasca(vascaID: string, callbackSuccess: any = () => {}, callbackError: any = () => {}) {
    this.setLoading(true, true);

    this.backend.post('tanks/getLastMisura?identificativoVasca='+vascaID, new HttpParams() ).subscribe(
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

  /**
   * Cancella una vasca
   * @param vascaID 
   * @param callbackSuccess 
   * @param callbackError 
   */
  public cancellaVasca(vascaID: string, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true, true);

    this.backend.post('tanks/delete?idTank='+vascaID, {idTank: vascaID} ).subscribe(
      (response : any) => {
        if (response.success && typeof response.aaData != "undefined") 
          callbackSuccess(response.aaData[0]);
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

  /**
   * 
   * @param currentVasca vasca per il quale aggiungere un pesce
   * @param currentPesce pesce da aggiungere alla vasca
   */
  public aggiungiPesce(currentVasca, currentPesce, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativoVasca = currentVasca!=null ? currentVasca.id : "";
    var identificativoPesce = currentPesce!=null ? currentPesce.id : "";
    this.backend.post('tanks/addFish?identificativoVasca='+identificativoVasca+'&identificativoPesce='+identificativoPesce, null, new HttpParams() ).subscribe(
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

  /**
   * 
   * @param currentVasca vasca per il quale eliminare un pesce
   * @param currentPesce pesce da eliminare alla vasca
   */
  public eliminaPesce(currentVasca, currentPesce, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativoVasca = currentVasca!=null ? currentVasca.id : "";
    var identificativoPesce = currentPesce!=null ? currentPesce.id : "";
    this.backend.post('tanks/removeFish?identificativoVasca='+identificativoVasca+'&identificativoPesce='+identificativoPesce, null, new HttpParams() ).subscribe(
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

  /**
   * 
   * @param currentVasca vasca per il quale aggiungere una pianta
   * @param currentPesce pianta da aggiungere alla vasca
   */
  public aggiungiPianta(currentVasca, currentPianta, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativoVasca = currentVasca!=null ? currentVasca.id : "";
    var identificativoPianta = currentPianta!=null ? currentPianta.id : "";
    this.backend.post('tanks/addPlant?identificativoVasca='+identificativoVasca+'&identificativoPianta='+identificativoPianta, null, new HttpParams() ).subscribe(
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

  /**
   * 
   * @param currentVasca vasca per il quale eliminare una pianta
   * @param currentPesce pianta da eliminare alla vasca
   */
  public eliminaPianta(currentVasca, currentPianta, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativoVasca = currentVasca!=null ? currentVasca.id : "";
    var identificativoPianta = currentPianta!=null ? currentPianta.id : "";
    this.backend.post('tanks/removePlant?identificativoVasca='+identificativoVasca+'&identificativoPianta='+identificativoPianta, null, new HttpParams() ).subscribe(
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

  /**
   * 
   * @param currentVasca vasca per il quale aggiungere una misura
   * @param modelMisura misura per la vasca
   */
  public aggiungiMisurazione(currentVasca, modelMisura, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativoVasca = currentVasca!=null ? currentVasca.id : "";
    var tipo = modelMisura.tipo;
    var valore = modelMisura.valore;
    var unita = modelMisura.unita;
    this.backend.post('tanks/addMeasure?identificativoVasca='+identificativoVasca+'&tipo='+tipo+'&valore='+valore+'&unita='+unita, null, new HttpParams() ).subscribe(
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

  /**
   * 
   * @param currentVasca vasca per il quale aggiungere una misura
   * @param idMisura identificativo della misura da eliminare
   */
  public rimuoviMisurazione(currentVasca, idMisura, callbackSuccess: any = () => {}, callbackError: any = () => {}) {

    this.setLoading(true);

    var identificativoVasca = currentVasca!=null ? currentVasca.id : "";
    this.backend.post('tanks/removeMisura?identificativoVasca='+identificativoVasca+'&identificativoMisura='+idMisura, null, new HttpParams() ).subscribe(
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
