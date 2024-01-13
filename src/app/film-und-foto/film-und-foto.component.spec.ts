import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmUndFotoComponent } from './film-und-foto.component';

describe('FilmUndFotoComponent', () => {
  let component: FilmUndFotoComponent;
  let fixture: ComponentFixture<FilmUndFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmUndFotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmUndFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
