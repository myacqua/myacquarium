import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { AppStateService } from 'src/app/_services/appstate.service';
import { UtenteService } from 'src/app/_services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model: any = {};
  constructor(private appState: AppStateService, private notify: AlertService, 
      private router: Router, private location:Location,
      private utenteService:UtenteService) { 

  }

  ngOnInit() {
  }

processForm(form) {

    if (form.form.valid)
    {
      this.utenteService.authenticate(this.model, (response) => {
        
        this.utenteService.getUser(this.model, (response) => {

          this.notify.showNotification("Benvenuto in MyAquarium", 'success');
          this.router.navigate(['dashboard']);
        }, () => {
          this.notify.showNotification("Errore in fase di recupero Utente", 'danger');
        });
      }, () => {
        this.notify.showNotification("Errore in fase di login", 'danger');
      });
    } else {
      this.notify.showNotification("Alcuni parametri non sono stai inseriti", 'danger');
    }
  }     
}
