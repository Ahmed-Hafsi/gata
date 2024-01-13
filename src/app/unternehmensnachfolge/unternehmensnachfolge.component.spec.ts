import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnternehmensnachfolgeComponent } from './unternehmensnachfolge.component';

describe('UnternehmensnachfolgeComponent', () => {
  let component: UnternehmensnachfolgeComponent;
  let fixture: ComponentFixture<UnternehmensnachfolgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnternehmensnachfolgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnternehmensnachfolgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
