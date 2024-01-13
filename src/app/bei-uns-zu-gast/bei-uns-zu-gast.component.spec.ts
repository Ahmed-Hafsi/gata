import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeiUnsZuGastComponent } from './bei-uns-zu-gast.component';

describe('BeiUnsZuGastComponent', () => {
  let component: BeiUnsZuGastComponent;
  let fixture: ComponentFixture<BeiUnsZuGastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeiUnsZuGastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeiUnsZuGastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
