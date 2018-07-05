import { BucketappsModule } from './bucketapps.module';

describe('BucketappsModule', () => {
  let bucketappsModule: BucketappsModule;

  beforeEach(() => {
    bucketappsModule = new BucketappsModule();
  });

  it('should create an instance', () => {
    expect(bucketappsModule).toBeTruthy();
  });
});
