import { BucketappsCovalentModule } from './bucketapps-covalent.module';

describe('BucketappsCovalentModule', () => {
  let bucketappsCovalentModule: BucketappsCovalentModule;

  beforeEach(() => {
    bucketappsCovalentModule = new BucketappsCovalentModule();
  });

  it('should create an instance', () => {
    expect(bucketappsCovalentModule).toBeTruthy();
  });
});
