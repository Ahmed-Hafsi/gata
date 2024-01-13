import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchWirRecherchierenDesBedarfComponent } from './research-wir-recherchieren-des-bedarf.component';

describe('ResearchWirRecherchierenDesBedarfComponent', () => {
  let component: ResearchWirRecherchierenDesBedarfComponent;
  let fixture: ComponentFixture<ResearchWirRecherchierenDesBedarfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchWirRecherchierenDesBedarfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchWirRecherchierenDesBedarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
