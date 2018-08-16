import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';
import { PurchaseSnapshot, PurchaseDescriptor } from '../types';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class PurchasesService extends RESTService<any> {

    static resource: string = "purchases";

    constructor(private _http: HttpInterceptorService, private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp()
        });
    }

    /**
     *  Retrieves all
     */
    public getAll(brandId: string, searchParams: any = null): Observable<PurchaseSnapshot> {
        return new Observable(observable => {
            let url = brandId + "/" + PurchasesService.resource;
            this._http.get(super.buildUrl(url, searchParams), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(PurchaseSnapshot.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Retrives one
     */
    public getOne(brandId: string, id: string): Observable<PurchaseDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + PurchasesService.resource + "/" + id;
            this._http.get(super.buildUrl(url), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(PurchaseDescriptor.import(response));
                observable.complete();
            });
        });
    }
    /**
     * Deletes one
     */
    public deleteOne(brandId: string, id: string): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + PurchasesService.resource + "/" + id;
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
    public createOne(brandId: string, data: PurchaseDescriptor): Observable<PurchaseDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + PurchasesService.resource;
            this._http.post(super.buildUrl(url), data, {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(PurchaseDescriptor.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Update
     */
    public updateOne(brandId: string, id: string, data: PurchaseDescriptor): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + PurchasesService.resource + "/" + id;
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
