import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';

export interface PurchasesData { //TODO: Put the right attributes
    uuid: string;
    id: number;
    description: string;
    provider: string;
    location: string;
    measure: number;
    date: Date;
    price: number;
    barcode: string;
    comments: string;
    status: number;
}

@Injectable()
export class PurchasesService extends RESTService<any> {

    constructor(private _http: HttpInterceptorService,
        private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp() + JSON.parse(localStorage.getItem('user'))['default_brand_id'] + '/purchases',
        });
    }

}
