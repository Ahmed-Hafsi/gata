import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitenBeiVandDComponent } from './arbeiten-bei-vand-d.component';

describe('ArbeitenBeiVandDComponent', () => {
  let component: ArbeitenBeiVandDComponent;
  let fixture: ComponentFixture<ArbeitenBeiVandDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArbeitenBeiVandDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbeitenBeiVandDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
