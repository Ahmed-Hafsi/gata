import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnternehmensCheckComponent } from './unternehmens-check.component';

describe('UnternehmensCheckComponent', () => {
  let component: UnternehmensCheckComponent;
  let fixture: ComponentFixture<UnternehmensCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnternehmensCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnternehmensCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
