/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiCrudsFunctionsService } from './apiCrudsFunctions.service';

describe('Service: ApiCrudsFunctions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCrudsFunctionsService]
    });
  });

  it('should ...', inject([ApiCrudsFunctionsService], (service: ApiCrudsFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
