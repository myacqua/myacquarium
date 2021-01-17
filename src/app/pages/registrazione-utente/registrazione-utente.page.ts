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
  constructor(private notify: AlertService, private appState: AppStateService, 
  private router: Router) { }

  ngOnInit() {
  }
  processForm(form) {
    
    Object.keys(form.form.controls).forEach(key => {
      form.form.get(key).markAsDirty();
      form.form.get(key).markAsTouched();
    });

    console.log(form);
    
    if (form.form.valid)
    {
      if (this.model.privacy == false) {
        this.notify.showNotification("Non hai selezionato la privacy", 'danger');  
        return;
      }
      this.notify.showNotification("Utente salvato", 'success');
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }

}
