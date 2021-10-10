import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/_services/appstate.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { UtenteService } from 'src/app/_services/utente.service';

@Component({
  selector: 'app-registrazione-utente',
  templateUrl: './registrazione-utente.page.html',
  styleUrls: ['./registrazione-utente.page.scss'],
})
export class RegistrazioneUtentePage implements OnInit {
  model: any = {};
  saveModel: any = {};
  constructor(private notify: AlertService, private appState: AppStateService, 
  private router: Router, private utenteService:UtenteService) { }

  ngOnInit() {
  }
  processForm(form) {
    
    Object.keys(form.form.controls).forEach(key => {
      form.form.get(key).markAsDirty();
      form.form.get(key).markAsTouched();
    });
    
    if (form.form.valid)
    {
      if (this.model.privacy == false) {
        this.notify.showNotification("Non hai selezionato la privacy", 'danger');  
        return;
      }
      this.saveModel = {"id":null, "name":this.model.nome,"email":this.model.email,
                        "username":this.model.email,"password":this.model.password};
      console.log("register");
      this.utenteService.save(this.saveModel, (response) => {
        
        this.notify.showNotification("Utente salvato", 'success');
        this.router.navigate(['login']);
      }, () => {
        this.notify.showNotification("Errore in fase di login", 'danger');
      }); 
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }

}
