import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  array_vasche: any = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }

  ionViewWillEnter() {
  }

  vascaOnclick(vasca: any) {
    
  }
}