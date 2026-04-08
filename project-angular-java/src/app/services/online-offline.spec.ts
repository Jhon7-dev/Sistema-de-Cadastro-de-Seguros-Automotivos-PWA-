import { TestBed } from '@angular/core/testing';

import { OnlineOffline } from './online-offline';

describe('OnlineOffline', () => {
  let service: OnlineOffline;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineOffline);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
