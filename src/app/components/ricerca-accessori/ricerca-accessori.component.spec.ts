import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RicercaAccessoriComponent } from './ricerca-accessori.component';

describe('RicercaAccessoriComponent', () => {
  let component: RicercaAccessoriComponent;
  let fixture: ComponentFixture<RicercaAccessoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaAccessoriComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RicercaAccessoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
