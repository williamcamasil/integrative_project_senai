import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVeiculosComponent } from './painel-veiculos.component';

describe('PainelVeiculosComponent', () => {
  let component: PainelVeiculosComponent;
  let fixture: ComponentFixture<PainelVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelVeiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
