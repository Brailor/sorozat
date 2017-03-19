/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetrecentService } from './getrecent.service';

describe('GetrecentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetrecentService]
    });
  });

  it('should ...', inject([GetrecentService], (service: GetrecentService) => {
    expect(service).toBeTruthy();
  }));
});
