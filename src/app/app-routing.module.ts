import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'nuovo-acquario',
    loadChildren: () => import('./pages/nuovo-acquario/nuovo-acquario.module').then( m => m.NuovoAcquarioPageModule)
  },
  {
    path: 'aggiungi',
    loadChildren: () => import('./pages/aggiungi/aggiungi.module').then( m => m.AggiungiPageModule)
  },
  {
    path: 'ricerca',
    loadChildren: () => import('./pages/ricerca/ricerca.module').then( m => m.RicercaPageModule)
  },
  {
    path: 'selezione-oggetto',
    loadChildren: () => import('./pages/selezione-oggetto/selezione-oggetto.module').then( m => m.SelezioneOggettoPageModule)
  },
  {
    path: 'gestisci-acquario',
    loadChildren: () => import('./pages/gestisci-acquario/gestisci-acquario.module').then( m => m.GestisciAcquarioPageModule)
  },
  {
    path: 'misure-acquario',
    loadChildren: () => import('./pages/misure-acquario/misure-acquario.module').then( m => m.MisureAcquarioPageModule)
  },
  {
    path: 'registrazione-utente',
    loadChildren: () => import('./pages/registrazione-utente/registrazione-utente.module').then( m => m.RegistrazioneUtentePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recupero-password',
    loadChildren: () => import('./pages/recupero-password/recupero-password.module').then( m => m.RecuperoPasswordPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
  path: 'guida',
  loadChildren: () => import('./pages/guida/guida.module').then( m => m.GuidaPageModule)
}


  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
