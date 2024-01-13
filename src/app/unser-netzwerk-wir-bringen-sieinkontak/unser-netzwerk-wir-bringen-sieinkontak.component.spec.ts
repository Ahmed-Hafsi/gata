import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnserNetzwerkWirBringenSieinkontakComponent } from './unser-netzwerk-wir-bringen-sieinkontak.component';

describe('UnserNetzwerkWirBringenSieinkontakComponent', () => {
  let component: UnserNetzwerkWirBringenSieinkontakComponent;
  let fixture: ComponentFixture<UnserNetzwerkWirBringenSieinkontakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnserNetzwerkWirBringenSieinkontakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnserNetzwerkWirBringenSieinkontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
