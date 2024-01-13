import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbersetzerComponent } from './ubersetzer.component';

describe('UbersetzerComponent', () => {
  let component: UbersetzerComponent;
  let fixture: ComponentFixture<UbersetzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbersetzerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbersetzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
