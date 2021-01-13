import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppStateService } from './_services/appstate.service';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

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
      title: 'Registrazione utente',
      slug: 'registrazione utente',
      url: '/registrazione-utente',
      icon: 'leaf'
    },
    {
      title: 'Login',
      slug: 'login',
      url: '/login',
      icon: 'leaf'
    },
    {
    title: 'Recupero password',
      slug: 'recupero password',
      url: '/recupero-password',
      icon: 'leaf'
    }
  ];
  public labels = ['Family'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appState: AppStateService,
    private router: Router
  ) {
    this.initializeApp();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.redesignPath();
    });
  }

  firstActivatRoute: string = 'dashboard';

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

  public get appstate() {
    return this.appState;
  }
}
