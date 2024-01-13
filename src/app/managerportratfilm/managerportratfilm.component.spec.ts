import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerportratfilmComponent } from './managerportratfilm.component';

describe('ManagerportratfilmComponent', () => {
  let component: ManagerportratfilmComponent;
  let fixture: ComponentFixture<ManagerportratfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerportratfilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerportratfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
