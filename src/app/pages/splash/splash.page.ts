import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VascheService } from '../../_services/vasche.service';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  array_vasche: any = [];

  constructor(private router:Router, private vascheService: VascheService) { }

  ngOnInit() {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }

  ionViewWillEnter() {
  }

  vascaOnclick(vasca: any) {
    
  }

  getVascheService() {
    return this.vascheService;
  }
}