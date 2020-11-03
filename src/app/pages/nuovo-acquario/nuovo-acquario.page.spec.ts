import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuovoAcquarioPage } from './nuovo-acquario.page';

describe('NuovoAcquarioPage', () => {
  let component: NuovoAcquarioPage;
  let fixture: ComponentFixture<NuovoAcquarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoAcquarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuovoAcquarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
