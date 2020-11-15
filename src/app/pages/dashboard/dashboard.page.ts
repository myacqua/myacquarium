import { Component, OnInit } from '@angular/core';
import { VascheService } from 'src/app/_services/vasche.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  protected array_vasche = [];

  constructor(private vascheService: VascheService) { }

  ngOnInit() {

    this.vascheService.recuperaVasche((response) => {
      this.array_vasche = response;
    });
  }


  vascaOnclick (vascaPremuta) {
    console.log("premuto sulla vasca" + vascaPremuta);
  }


  public get vascheservice () {
    return this.vascheService;
  }

}
