import { BucketappsSecurityModule } from './bucketapps-security.module';

describe('BucketappsSecurityModule', () => {
  let bucketappsSecurityModule: BucketappsSecurityModule;

  beforeEach(() => {
    bucketappsSecurityModule = new BucketappsSecurityModule();
  });

  it('should create an instance', () => {
    expect(bucketappsSecurityModule).toBeTruthy();
  });
});
