import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutplacementComponent } from './outplacement.component';

describe('OutplacementComponent', () => {
  let component: OutplacementComponent;
  let fixture: ComponentFixture<OutplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutplacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
