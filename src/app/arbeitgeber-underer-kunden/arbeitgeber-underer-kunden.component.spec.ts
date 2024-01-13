import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitgeberUndererKundenComponent } from './arbeitgeber-underer-kunden.component';

describe('ArbeitgeberUndererKundenComponent', () => {
  let component: ArbeitgeberUndererKundenComponent;
  let fixture: ComponentFixture<ArbeitgeberUndererKundenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArbeitgeberUndererKundenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbeitgeberUndererKundenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
