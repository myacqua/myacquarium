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

  constructor(private notify: AlertService, private vascheService: VascheService, private router: Router, private appState: AppStateService) { }

  ngOnInit() {
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
        this.notify.showNotification("Vasca Creata");
        this.router.navigate(['aggiungi']);
      }, () => {
        this.notify.showNotification("Errore nella creazione della vasca", 'success');
      });
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }

}
