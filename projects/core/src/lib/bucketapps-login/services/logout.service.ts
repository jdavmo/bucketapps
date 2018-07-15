import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';

@Injectable()
export class LogoutService extends RESTService<any> {

    constructor(private _http: HttpInterceptorService,
                private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: '/api/v1/logout',
        });
    }

}
