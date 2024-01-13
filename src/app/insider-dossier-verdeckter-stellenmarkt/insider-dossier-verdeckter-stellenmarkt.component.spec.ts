import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsiderDossierVerdeckterStellenmarktComponent } from './insider-dossier-verdeckter-stellenmarkt.component';

describe('InsiderDossierVerdeckterStellenmarktComponent', () => {
  let component: InsiderDossierVerdeckterStellenmarktComponent;
  let fixture: ComponentFixture<InsiderDossierVerdeckterStellenmarktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsiderDossierVerdeckterStellenmarktComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsiderDossierVerdeckterStellenmarktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
