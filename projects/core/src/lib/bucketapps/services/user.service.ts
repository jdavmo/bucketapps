import { Injectable } from '@angular/core';
import { BucketappsConfigService } from './bucketapps-config.service';
import { HttpInterceptorService, RESTService } from '@covalent/http';

@Injectable()
export class UserService extends RESTService<any> {

    constructor(private _http: HttpInterceptorService,  private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.getApiResourcePoint() + '/' + _BucketappsConfig.getApiResourceVersion() + '/user',
        });
    }

}
