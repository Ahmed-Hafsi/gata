import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchriftlicheUnterlagenComponent } from './schriftliche-unterlagen.component';

describe('SchriftlicheUnterlagenComponent', () => {
  let component: SchriftlicheUnterlagenComponent;
  let fixture: ComponentFixture<SchriftlicheUnterlagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchriftlicheUnterlagenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchriftlicheUnterlagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
