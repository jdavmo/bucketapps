import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';

export interface ITypesData {
    uuid: string;
    name: string;
    comments: string;
    status: number;
}

export interface ITypes {
    current_page: number;
    data: ITypesData[];
    last_page: number;
    next_page_url: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

@Injectable()
export class TypesService extends RESTService<any> {

    constructor(private _http: HttpInterceptorService,
        private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp() + JSON.parse(localStorage.getItem('user'))['default_brand_id'] + '/types',
        });
    }

}
