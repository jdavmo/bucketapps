import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';
import { OutDetailSnapshot, OutDetailDescriptor } from '../types';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class OutDetailService extends RESTService<any> {

    static resource: string = "outdetail";

    constructor(private _http: HttpInterceptorService, private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp()
        });
    }

    /**
     *  Retrieves all
     */
    public getAll(brandId: string, searchParams: any = null): Observable<OutDetailSnapshot> {
        return new Observable(observable => {
            let url = brandId + "/" + OutDetailService.resource;
            this._http.get(super.buildUrl(url, searchParams), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(OutDetailSnapshot.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Retrives one
     */
    public getOne(brandId: string, id: string): Observable<OutDetailDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + OutDetailService.resource + "/" + id;
            this._http.get(super.buildUrl(url), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(OutDetailDescriptor.import(response));
                observable.complete();
            });
        });
    }
    /**
     * Deletes one
     */
    public deleteOne(brandId: string, id: string): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + OutDetailService.resource + "/" + id;
            this._http.delete(super.buildUrl(url), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(response);
                observable.complete();
            });
        });
    }
    /**
     * Creates a new
     */
    public createOne(brandId: string, data: OutDetailDescriptor): Observable<OutDetailDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + OutDetailService.resource;
            this._http.post(super.buildUrl(url), data, {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(OutDetailDescriptor.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Update
     */
    public updateOne(brandId: string, id: string, data: OutDetailDescriptor): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + OutDetailService.resource + "/" + id;
            this._http.patch(super.buildUrl(url), data, {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(response);
                observable.complete();
            });
        });
    }

}
