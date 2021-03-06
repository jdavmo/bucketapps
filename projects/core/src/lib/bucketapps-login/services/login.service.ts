import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { BucketappsConfigService } from '../../bucketapps/services';
import { HttpInterceptorService, RESTService } from '@covalent/http';

@Injectable()
export class LoginService extends RESTService<any> {

    constructor(private _http: HttpInterceptorService,
                private _BucketappsConfig: BucketappsConfigService) {
        
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: '/oauth/token',
        });

    }
}
