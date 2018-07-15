import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';

export interface InData { //TODO: Put the right attributes
    uuid: string;
    name: string;
    reference: string;
    description: string;
    peso_metro_lineal: number;
    img: string;
    barcode: string;
    comments: string;
    status: number;
}

@Injectable()
export class InDetailService extends RESTService<any> {
    
    constructor(private _http: HttpInterceptorService,
        private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp() + JSON.parse(localStorage.getItem('user'))['default_brand_id'] + '/indetail',
        });
    }

}
