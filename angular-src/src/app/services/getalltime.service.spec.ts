/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetalltimeService } from './getalltime.service';

describe('GetalltimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetalltimeService]
    });
  });

  it('should ...', inject([GetalltimeService], (service: GetalltimeService) => {
    expect(service).toBeTruthy();
  }));
});
