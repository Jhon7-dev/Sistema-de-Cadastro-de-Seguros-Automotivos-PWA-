import { TestBed } from '@angular/core/testing';

import { MarcaCarro } from './marca-carro';

describe('MarcaCarro', () => {
  let service: MarcaCarro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarcaCarro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
