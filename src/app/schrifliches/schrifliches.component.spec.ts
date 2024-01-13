import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchriflichesComponent } from './schrifliches.component';

describe('SchriflichesComponent', () => {
  let component: SchriflichesComponent;
  let fixture: ComponentFixture<SchriflichesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchriflichesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchriflichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
