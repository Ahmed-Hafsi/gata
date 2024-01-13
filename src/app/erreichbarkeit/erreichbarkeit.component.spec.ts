import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreichbarkeitComponent } from './erreichbarkeit.component';

describe('ErreichbarkeitComponent', () => {
  let component: ErreichbarkeitComponent;
  let fixture: ComponentFixture<ErreichbarkeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErreichbarkeitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErreichbarkeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
