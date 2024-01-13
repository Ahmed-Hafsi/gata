import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionierungComponent } from './positionierung.component';

describe('PositionierungComponent', () => {
  let component: PositionierungComponent;
  let fixture: ComponentFixture<PositionierungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionierungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionierungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
