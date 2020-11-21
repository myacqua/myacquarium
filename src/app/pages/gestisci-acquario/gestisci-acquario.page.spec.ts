import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestisciAcquarioPage } from './gestisci-acquario.page';

describe('GestisciAcquarioPage', () => {
  let component: GestisciAcquarioPage;
  let fixture: ComponentFixture<GestisciAcquarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestisciAcquarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestisciAcquarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
