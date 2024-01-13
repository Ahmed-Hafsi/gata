import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeraterKnowhowWirhOrenDasGrasWachComponent } from './berater-knowhow-wirh-oren-das-gras-wach.component';

describe('BeraterKnowhowWirhOrenDasGrasWachComponent', () => {
  let component: BeraterKnowhowWirhOrenDasGrasWachComponent;
  let fixture: ComponentFixture<BeraterKnowhowWirhOrenDasGrasWachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeraterKnowhowWirhOrenDasGrasWachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeraterKnowhowWirhOrenDasGrasWachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
