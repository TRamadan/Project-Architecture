/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuccessErrorService } from './success-error.service';

describe('Service: SuccessError', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessErrorService]
    });
  });

  it('should ...', inject([SuccessErrorService], (service: SuccessErrorService) => {
    expect(service).toBeTruthy();
  }));
});
