import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeitsvertragsangeboteComponent } from './arbeitsvertragsangebote.component';

describe('ArbeitsvertragsangeboteComponent', () => {
  let component: ArbeitsvertragsangeboteComponent;
  let fixture: ComponentFixture<ArbeitsvertragsangeboteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArbeitsvertragsangeboteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArbeitsvertragsangeboteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
