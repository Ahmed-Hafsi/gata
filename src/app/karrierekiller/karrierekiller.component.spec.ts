import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarrierekillerComponent } from './karrierekiller.component';

describe('KarrierekillerComponent', () => {
  let component: KarrierekillerComponent;
  let fixture: ComponentFixture<KarrierekillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KarrierekillerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KarrierekillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
