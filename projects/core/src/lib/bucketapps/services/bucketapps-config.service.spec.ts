import { TestBed, inject } from '@angular/core/testing';

import { BucketappsConfigService } from './bucketapps-config.service';

describe('BucketappsConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketappsConfigService]
    });
  });

  it('should be created', inject([BucketappsConfigService], (service: BucketappsConfigService) => {
    expect(service).toBeTruthy();
  }));
});
