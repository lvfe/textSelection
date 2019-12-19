import { TestBed } from '@angular/core/testing';

import { CmoService } from './cmo.service';

describe('CmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmoService = TestBed.get(CmoService);
    expect(service).toBeTruthy();
  });
});
