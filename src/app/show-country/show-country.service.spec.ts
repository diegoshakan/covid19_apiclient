import { TestBed } from '@angular/core/testing';

import { ShowCountryService } from './show-country.service';

describe('ShowCountryService', () => {
  let service: ShowCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
