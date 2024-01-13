import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAndDInsideComponent } from './vand-dinside.component';

describe('VAndDInsideComponent', () => {
  let component: VAndDInsideComponent;
  let fixture: ComponentFixture<VAndDInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VAndDInsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VAndDInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
