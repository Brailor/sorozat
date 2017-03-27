/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetRecentService } from './getrecent.service';

describe('GetrecentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRecentService]
    });
  });

  it('should ...', inject([GetRecentService], (service: GetRecentService) => {
    expect(service).toBeTruthy();
  }));
});
