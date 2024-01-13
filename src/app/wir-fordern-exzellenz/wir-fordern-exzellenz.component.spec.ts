import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirFordernExzellenzComponent } from './wir-fordern-exzellenz.component';

describe('WirFordernExzellenzComponent', () => {
  let component: WirFordernExzellenzComponent;
  let fixture: ComponentFixture<WirFordernExzellenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WirFordernExzellenzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WirFordernExzellenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
