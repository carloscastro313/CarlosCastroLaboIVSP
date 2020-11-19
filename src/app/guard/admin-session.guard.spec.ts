import { TestBed } from '@angular/core/testing';

import { AdminSessionGuard } from './admin-session.guard';

describe('AdminSessionGuard', () => {
  let guard: AdminSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
