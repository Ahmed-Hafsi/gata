import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadhunterWirverschaffenIhnenZugangComponent } from './headhunter-wirverschaffen-ihnen-zugang.component';

describe('HeadhunterWirverschaffenIhnenZugangComponent', () => {
  let component: HeadhunterWirverschaffenIhnenZugangComponent;
  let fixture: ComponentFixture<HeadhunterWirverschaffenIhnenZugangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadhunterWirverschaffenIhnenZugangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadhunterWirverschaffenIhnenZugangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
