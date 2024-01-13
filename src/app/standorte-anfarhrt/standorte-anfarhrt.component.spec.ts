import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandorteAnfarhrtComponent } from './standorte-anfarhrt.component';

describe('StandorteAnfarhrtComponent', () => {
  let component: StandorteAnfarhrtComponent;
  let fixture: ComponentFixture<StandorteAnfarhrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandorteAnfarhrtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandorteAnfarhrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
