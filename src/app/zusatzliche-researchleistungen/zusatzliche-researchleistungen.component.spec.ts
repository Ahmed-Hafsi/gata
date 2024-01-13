import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZusatzlicheResearchleistungenComponent } from './zusatzliche-researchleistungen.component';

describe('ZusatzlicheResearchleistungenComponent', () => {
  let component: ZusatzlicheResearchleistungenComponent;
  let fixture: ComponentFixture<ZusatzlicheResearchleistungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZusatzlicheResearchleistungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZusatzlicheResearchleistungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
