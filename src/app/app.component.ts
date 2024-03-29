import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppStateService } from './_services/appstate.service';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';
import { UtenteService } from './_services/utente.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      slug: 'dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Pesci',
      slug: 'pesci',
      url: '/ricerca',
      icon: 'fish'
    },
    {
      title: 'Piante',
      slug: 'piante',
      url: '/ricerca',
      icon: 'leaf'
    },
    {
      title: 'Guida',
      slug: 'guida',
      url: '/guida',
      icon: 'help-circle'
    }
  
  
    ];
  public labels = ['Family'];
  public mailTo = "mailto:alessandro.paolillo@gmail.com?subject=MyAquarium%20Segnalazione";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appState: AppStateService,
    private router: Router,
    private utente: UtenteService
  ) {
    this.initializeApp();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.redesignPath();
    });
  }

  firstActivatRoute: string = 'splash';

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigate([this.firstActivatRoute], { replaceUrl: true });
    });
  }

  ngOnInit() {
    this.redesignPath();
  }

  redesignPath() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.utente.logout();
    this.router.navigate(['login'], { replaceUrl: true });
  }

  inviaEmail() {
    window.location.href = this.mailTo;
  }

  public get appstate() {
    return this.appState;
  }
}
