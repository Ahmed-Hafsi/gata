import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HansRainerVogelComponent } from './hans-rainer-vogel.component';

describe('HansRainerVogelComponent', () => {
  let component: HansRainerVogelComponent;
  let fixture: ComponentFixture<HansRainerVogelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HansRainerVogelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HansRainerVogelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
