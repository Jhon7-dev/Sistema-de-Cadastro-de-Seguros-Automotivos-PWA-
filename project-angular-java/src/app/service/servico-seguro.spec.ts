import { TestBed } from '@angular/core/testing';

import { ServicoSeguro } from './servico-seguro';

describe('ServicoSeguro', () => {
  let service: ServicoSeguro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoSeguro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
