import { TestBed, inject } from '@angular/core/testing';

import { NavsearchService } from './navsearch.service';

describe('NavsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavsearchService]
    });
  });

  it('should ...', inject([NavsearchService], (service: NavsearchService) => {
    expect(service).toBeTruthy();
  }));
});
