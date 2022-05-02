/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnackServiceService } from './snackService.service';

describe('Service: SnackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackServiceService]
    });
  });

  it('should ...', inject([SnackServiceService], (service: SnackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
