import { TestBed, inject } from '@angular/core/testing';

import { DocumentsharedService } from './documentshared.service';

describe('DocumentsharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentsharedService]
    });
  });

  it('should ...', inject([DocumentsharedService], (service: DocumentsharedService) => {
    expect(service).toBeTruthy();
  }));
});
