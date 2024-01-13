import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAndDImDialogComponent } from './vand-dim-dialog.component';

describe('VAndDImDialogComponent', () => {
  let component: VAndDImDialogComponent;
  let fixture: ComponentFixture<VAndDImDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VAndDImDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VAndDImDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
