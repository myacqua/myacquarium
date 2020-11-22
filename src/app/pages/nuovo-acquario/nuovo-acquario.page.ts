import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { VascheService } from 'src/app/_services/vasche.service';

@Component({
  selector: 'app-nuovo-acquario',
  templateUrl: './nuovo-acquario.page.html',
  styleUrls: ['./nuovo-acquario.page.scss'],
})
export class NuovoAcquarioPage implements OnInit {

  model: any = {};
  editMode: boolean = false;

  constructor(private notify: AlertService, private vascheService: VascheService, private router: Router, 
    private appState: AppStateService, private location:Location) { }

  ngOnInit() {

    if (this.appState.currenVasca) {
      this.model = this.appState.currenVasca;
      this.editMode = true;
    }
  }

  processForm(form) {

    Object.keys(form.form.controls).forEach(key => {
      form.form.get(key).markAsDirty();
      form.form.get(key).markAsTouched();
    });

    if (form.form.valid)
    {
      this.vascheService.saveVasca(this.model, (response) => {
        this.appState.currenVasca = response;

        if (this.editMode) {
          this.notify.showNotification("Vasca Aggiornata", 'success');
          this.location.back();
        } 
        else {
          this.notify.showNotification("Vasca Creata");
          this.router.navigate(['aggiungi']);
        }
      }, () => {
        if (this.editMode)
          this.notify.showNotification("Errore nell'aggiornamento della vasca", 'danger');
        else
          this.notify.showNotification("Errore nella creazione della vasca", 'danger');
      });
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }


  cancellaAcquario() {

    if (!this.model.id)
      return;

    this.notify.showQuestion("Sei sicuro?", "stai per cancellare il tuo acquario", "Si", "No", (response) => {
      if (response == true)
        this.vascheService.cancellaVasca(this.model.id, (response) => {
          this.notify.showNotification("Acquario cancellato", 'success');
          this.router.navigate(['dashboard'], {replaceUrl: true});
        })

    })
  }
}
