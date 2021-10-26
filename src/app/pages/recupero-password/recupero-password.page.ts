import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtenteService } from 'src/app/_services/utente.service';

@Component({
  selector: 'app-recupero-password',
  templateUrl: './recupero-password.page.html',
  styleUrls: ['./recupero-password.page.scss'],
})
export class RecuperoPasswordPage implements OnInit {
  model: any = {};
  
  constructor(private utenteService: UtenteService) { }

  ngOnInit() {
  }

  processForm(form:NgForm) {
    
    if (form.form.valid) {

      console.log(this.model.email);

      this.utenteService.passwordRecover(this.model, (response) => {
        console.log(response);
      })
    }
  }
}
