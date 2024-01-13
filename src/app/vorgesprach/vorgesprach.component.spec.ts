import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorgesprachComponent } from './vorgesprach.component';

describe('VorgesprachComponent', () => {
  let component: VorgesprachComponent;
  let fixture: ComponentFixture<VorgesprachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VorgesprachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VorgesprachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
