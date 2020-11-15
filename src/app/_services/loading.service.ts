import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class LoadingService {
  //  loading instance
  loading: any = null;

  constructor(public loadingController: LoadingController) { }

  public showLoadingWithMessage(message: string, callbackSucces = () => { }) {
    this.presentLoading(message, () => {
      callbackSucces();
    });
  }

  public showFullLoading() {
    this.presentLoading("Attendere...");
  }

  public hideLoading() {
    this.loadingController.dismiss();
  }

  public setMessage(text: string) {
    if (this.loading != null) this.loading.message = text;
  }

  private async presentLoading(message: string, callbackSucces = () => { }) {
    this.loading = await this.loadingController.create({
      message: message,
      backdropDismiss: true,
    });
    this.loading.present().then(() => {
      callbackSucces();
    });
  }

}
