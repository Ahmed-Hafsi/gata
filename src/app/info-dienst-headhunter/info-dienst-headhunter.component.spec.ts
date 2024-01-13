import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDienstHeadhunterComponent } from './info-dienst-headhunter.component';

describe('InfoDienstHeadhunterComponent', () => {
  let component: InfoDienstHeadhunterComponent;
  let fixture: ComponentFixture<InfoDienstHeadhunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoDienstHeadhunterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDienstHeadhunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
