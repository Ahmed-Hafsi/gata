import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZielfirMentlisteComponent } from './zielfir-mentliste.component';

describe('ZielfirMentlisteComponent', () => {
  let component: ZielfirMentlisteComponent;
  let fixture: ComponentFixture<ZielfirMentlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZielfirMentlisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZielfirMentlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
