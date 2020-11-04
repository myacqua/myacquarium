import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelezionepescePage } from './selezionepesce.page';

describe('SelezionepescePage', () => {
  let component: SelezionepescePage;
  let fixture: ComponentFixture<SelezionepescePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelezionepescePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelezionepescePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
