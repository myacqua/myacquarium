import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisureAcquarioPage } from './misure-acquario.page';

describe('MisureAcquarioPage', () => {
  let component: MisureAcquarioPage;
  let fixture: ComponentFixture<MisureAcquarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisureAcquarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisureAcquarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
