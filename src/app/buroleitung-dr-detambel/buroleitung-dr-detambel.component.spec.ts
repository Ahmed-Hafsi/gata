import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuroleitungDrDetambelComponent } from './buroleitung-dr-detambel.component';

describe('BuroleitungDrDetambelComponent', () => {
  let component: BuroleitungDrDetambelComponent;
  let fixture: ComponentFixture<BuroleitungDrDetambelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuroleitungDrDetambelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuroleitungDrDetambelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
