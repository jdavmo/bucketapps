import { BucketappsInventoryModule } from './bucketapps-inventory.module';

describe('BucketappsInventoryModule', () => {
  let bucketappsInventoryModule: BucketappsInventoryModule;

  beforeEach(() => {
    bucketappsInventoryModule = new BucketappsInventoryModule();
  });

  it('should create an instance', () => {
    expect(bucketappsInventoryModule).toBeTruthy();
  });
});
