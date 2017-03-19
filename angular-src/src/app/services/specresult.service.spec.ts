/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpecresultService } from './specresult.service';

describe('SpecresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpecresultService]
    });
  });

  it('should ...', inject([SpecresultService], (service: SpecresultService) => {
    expect(service).toBeTruthy();
  }));
});
