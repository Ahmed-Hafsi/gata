import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDanielDetambelComponent } from './dr-daniel-detambel.component';

describe('DrDanielDetambelComponent', () => {
  let component: DrDanielDetambelComponent;
  let fixture: ComponentFixture<DrDanielDetambelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrDanielDetambelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrDanielDetambelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
