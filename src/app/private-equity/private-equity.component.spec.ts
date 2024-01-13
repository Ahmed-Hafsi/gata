import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEquityComponent } from './private-equity.component';

describe('PrivateEquityComponent', () => {
  let component: PrivateEquityComponent;
  let fixture: ComponentFixture<PrivateEquityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivateEquityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
