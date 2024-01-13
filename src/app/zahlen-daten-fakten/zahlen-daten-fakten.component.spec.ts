import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlenDatenFaktenComponent } from './zahlen-daten-fakten.component';

describe('ZahlenDatenFaktenComponent', () => {
  let component: ZahlenDatenFaktenComponent;
  let fixture: ComponentFixture<ZahlenDatenFaktenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZahlenDatenFaktenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZahlenDatenFaktenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
