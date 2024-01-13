import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorstellungsgesprachComponent } from './vorstellungsgesprach.component';

describe('VorstellungsgesprachComponent', () => {
  let component: VorstellungsgesprachComponent;
  let fixture: ComponentFixture<VorstellungsgesprachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VorstellungsgesprachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VorstellungsgesprachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
