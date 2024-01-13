import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsereBuchpublikationenComponent } from './unsere-buchpublikationen.component';

describe('UnsereBuchpublikationenComponent', () => {
  let component: UnsereBuchpublikationenComponent;
  let fixture: ComponentFixture<UnsereBuchpublikationenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsereBuchpublikationenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsereBuchpublikationenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
