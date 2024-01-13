import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeltmanagerComponent } from './projeltmanager.component';

describe('ProjeltmanagerComponent', () => {
  let component: ProjeltmanagerComponent;
  let fixture: ComponentFixture<ProjeltmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjeltmanagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjeltmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
