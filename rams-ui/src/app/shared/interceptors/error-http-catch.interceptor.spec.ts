import { TestBed } from '@angular/core/testing';

import { ErrorHttpCatchInterceptor } from './error-http-catch.interceptor';

describe('ErrorHttpCatchInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHttpCatchInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHttpCatchInterceptor = TestBed.inject(ErrorHttpCatchInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
