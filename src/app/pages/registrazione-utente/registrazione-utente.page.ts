import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-registrazione-utente',
  templateUrl: './registrazione-utente.page.html',
  styleUrls: ['./registrazione-utente.page.scss'],
})
export class RegistrazioneUtentePage implements OnInit {
  model: any = {};
  editMode: boolean = false;
  constructor(private notify: AlertService, private appState: AppStateService, 
  private router: Router, private location:Location) { }

  ngOnInit() {
  }
  processForm(form) {

    Object.keys(form.form.controls).forEach(key => {
      form.form.get(key).markAsDirty();
      form.form.get(key).markAsTouched();
    });

    if (form.form.valid)
    {
      this.notify.showNotification("Utente salvato", 'success');
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }

}
