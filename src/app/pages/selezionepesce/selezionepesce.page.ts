import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/appstate.service';

@Component({
  selector: 'app-selezionepesce',
  templateUrl: './selezionepesce.page.html',
  styleUrls: ['./selezionepesce.page.scss'],
})
export class SelezionepescePage implements OnInit {

  constructor(private appstate:AppStateService) { }

  ngOnInit() {

  }

}
