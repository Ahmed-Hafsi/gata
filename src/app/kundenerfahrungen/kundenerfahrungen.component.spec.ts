import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenerfahrungenComponent } from './kundenerfahrungen.component';

describe('KundenerfahrungenComponent', () => {
  let component: KundenerfahrungenComponent;
  let fixture: ComponentFixture<KundenerfahrungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KundenerfahrungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KundenerfahrungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
