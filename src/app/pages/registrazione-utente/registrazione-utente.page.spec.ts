import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrazioneUtentePage } from './registrazione-utente.page';

describe('RegistrazioneUtentePage', () => {
  let component: RegistrazioneUtentePage;
  let fixture: ComponentFixture<RegistrazioneUtentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrazioneUtentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrazioneUtentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
