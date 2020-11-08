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

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
