import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungsbroschureComponent } from './leistungsbroschure.component';

describe('LeistungsbroschureComponent', () => {
  let component: LeistungsbroschureComponent;
  let fixture: ComponentFixture<LeistungsbroschureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeistungsbroschureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeistungsbroschureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
