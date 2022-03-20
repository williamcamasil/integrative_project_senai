import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVeiculosComponent } from './mural-veiculos.component';

describe('MuralVeiculosComponent', () => {
  let component: MuralVeiculosComponent;
  let fixture: ComponentFixture<MuralVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVeiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
