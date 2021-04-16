import { TestBed } from '@angular/core/testing';

import { HardcodedAuthanticationService } from './hardcoded-authantication.service';

describe('HardcodedAuthanticationService', () => {
  let service: HardcodedAuthanticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthanticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
