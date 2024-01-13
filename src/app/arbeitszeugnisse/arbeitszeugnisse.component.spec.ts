import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitszeugnisseComponent } from './arbeitszeugnisse.component';

describe('ArbeitszeugnisseComponent', () => {
  let component: ArbeitszeugnisseComponent;
  let fixture: ComponentFixture<ArbeitszeugnisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArbeitszeugnisseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbeitszeugnisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
