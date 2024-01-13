import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystenComponent } from './analysten.component';

describe('AnalystenComponent', () => {
  let component: AnalystenComponent;
  let fixture: ComponentFixture<AnalystenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalystenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalystenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
