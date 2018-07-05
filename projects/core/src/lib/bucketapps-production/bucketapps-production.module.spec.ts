import { BucketappsProductionModule } from './bucketapps-production.module';

describe('BucketappsProductionModule', () => {
  let bucketappsProductionModule: BucketappsProductionModule;

  beforeEach(() => {
    bucketappsProductionModule = new BucketappsProductionModule();
  });

  it('should create an instance', () => {
    expect(bucketappsProductionModule).toBeTruthy();
  });
});
