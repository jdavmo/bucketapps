import { BucketappsAuditModule } from './bucketapps-audit.module';

describe('BucketappsAuditModule', () => {
  let bucketappsAuditModule: BucketappsAuditModule;

  beforeEach(() => {
    bucketappsAuditModule = new BucketappsAuditModule();
  });

  it('should create an instance', () => {
    expect(bucketappsAuditModule).toBeTruthy();
  });
});
