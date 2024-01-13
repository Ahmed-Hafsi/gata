import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalePrasenzComponent } from './digitale-prasenz.component';

describe('DigitalePrasenzComponent', () => {
  let component: DigitalePrasenzComponent;
  let fixture: ComponentFixture<DigitalePrasenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalePrasenzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalePrasenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
