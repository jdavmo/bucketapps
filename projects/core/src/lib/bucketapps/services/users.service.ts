import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services/bucketapps-config.service';
import { UsersSnapshot } from '../types';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class UsersService extends RESTService<any> {

    static resource: string = "users";

    constructor(private _http: HttpInterceptorService, private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp()
        });
    }

    /**
     *  Retrieves all
     */
    public getAll(brandId: string, searchParams: any = null): Observable<UsersSnapshot> {
        return new Observable(observable => {
            let url = brandId + "/" + UsersService.resource;
            this._http.get(super.buildUrl(url, searchParams), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(UsersSnapshot.import(response));
                observable.complete();
            });
        });
    }

}
