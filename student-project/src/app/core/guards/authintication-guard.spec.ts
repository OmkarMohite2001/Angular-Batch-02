import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authinticationGuard } from './authintication-guard';

describe('authinticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authinticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
