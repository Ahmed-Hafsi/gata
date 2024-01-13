import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDienstPersonaliaComponent } from './info-dienst-personalia.component';

describe('InfoDienstPersonaliaComponent', () => {
  let component: InfoDienstPersonaliaComponent;
  let fixture: ComponentFixture<InfoDienstPersonaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoDienstPersonaliaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDienstPersonaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
