import { BucketappsLoginModule } from './bucketapps-login.module';

describe('BucketappsLoginModule', () => {
  let bucketappsLoginModule: BucketappsLoginModule;

  beforeEach(() => {
    bucketappsLoginModule = new BucketappsLoginModule();
  });

  it('should create an instance', () => {
    expect(bucketappsLoginModule).toBeTruthy();
  });
});
