import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmwegeZumZielComponent } from './umwege-zum-ziel.component';

describe('UmwegeZumZielComponent', () => {
  let component: UmwegeZumZielComponent;
  let fixture: ComponentFixture<UmwegeZumZielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UmwegeZumZielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UmwegeZumZielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
