import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VorstandsportalComponent } from './vorstandsportal.component';

describe('VorstandsportalComponent', () => {
  let component: VorstandsportalComponent;
  let fixture: ComponentFixture<VorstandsportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VorstandsportalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VorstandsportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
