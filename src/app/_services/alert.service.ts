import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AlertService {

  constructor(public alertController: AlertController, public toastController: ToastController) { }

  async showNotification(message: string, color: string = undefined) {

    const toast = await this.toastController.create({
      message: message,
      color: color,
      position: "bottom",
      duration: 2000
    });

    toast.present();
  }

  public showError(title: string, message: string, subHeader: string = '') {
    this.presentError(title, message, subHeader);
  }

  public showMessage(title: string, message: string, subHeader: string = '') {
    this.presentMessage(title, message, subHeader);
  }

  public showQuestion(title: string, message: string, buttonYes: string, buttonNo: string, callback: any = null) {
    this.presentQuestion(title, message, buttonYes, buttonNo, (response) => {
      if (callback != null)
        callback(response);
    });
  }

  public showNetworkError(title: string, message: string, subHeader: string = '') {
    this.presentError(title, message, subHeader);
  }

  sessionErrorPresented: boolean = false;

  public resetSessionError() {
    this.sessionErrorPresented = false;
  }

  public showSessionError(title: string, message: string, subHeader: string = '') {

    if (this.sessionErrorPresented)
      return;

    this.presentError(title, message, subHeader, () => {
      this.sessionErrorPresented = true;
    });
  }





  private async presentMessage(title: string, message: string, subHeader: string = '') {
    const alert = await this.alertController.create({
      header: title,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }



  private async presentError(title: string, message: string, subHeader: string = '', callback: any = null) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: subHeader,
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            if (callback != null)
              callback(true);
          }
        }
      ]
    });

    await alert.present();
  }

  private async presentQuestion(title: string, message: string, buttonYes: string, buttonNo: string, callback: any = null) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: [
        {
          text: buttonYes,
          handler: () => {
            if (callback != null)
              callback(true);
          }
        }, {
          text: buttonNo,
          handler: () => {
            if (callback != null)
              callback(false);
          }
        }
      ]
    });

    await alert.present();
  }

}