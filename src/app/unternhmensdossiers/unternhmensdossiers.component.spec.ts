import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnternhmensdossiersComponent } from './unternhmensdossiers.component';

describe('UnternhmensdossiersComponent', () => {
  let component: UnternhmensdossiersComponent;
  let fixture: ComponentFixture<UnternhmensdossiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnternhmensdossiersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnternhmensdossiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
