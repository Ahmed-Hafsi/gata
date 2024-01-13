import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPortratsComponent } from './business-portrats.component';

describe('BusinessPortratsComponent', () => {
  let component: BusinessPortratsComponent;
  let fixture: ComponentFixture<BusinessPortratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessPortratsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPortratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
