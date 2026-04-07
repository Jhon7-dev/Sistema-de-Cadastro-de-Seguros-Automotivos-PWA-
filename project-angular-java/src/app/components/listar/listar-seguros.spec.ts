import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSeguros } from './listar-seguros.component';

describe('ListarSeguros', () => {
  let component: ListarSeguros;
  let fixture: ComponentFixture<ListarSeguros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarSeguros],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarSeguros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
