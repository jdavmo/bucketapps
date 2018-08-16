import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';
import { ProductSnapshot, ProductDescriptor } from '../types';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class ProductsService extends RESTService<any> {

    static resource: string = "products";

    constructor(private _http: HttpInterceptorService, private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp()
        });
    }

    /**
     *  Retrieves all
     */
    public getAll(brandId: string, searchParams: any = null): Observable<ProductSnapshot> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductsService.resource;
            this._http.get(super.buildUrl(url, searchParams), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(ProductSnapshot.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Retrives one
     */
    public getOne(brandId: string, id: string): Observable<ProductDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductsService.resource + "/" + id;
            this._http.get(super.buildUrl(url), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(ProductDescriptor.import(response));
                observable.complete();
            });
        });
    }
    /**
     * Deletes one
     */
    public deleteOne(brandId: string, id: string): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductsService.resource + "/" + id;
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
    public createOne(brandId: string, data: ProductDescriptor): Observable<ProductDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductsService.resource;
            this._http.post(super.buildUrl(url), data, {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(ProductDescriptor.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Update
     */
    public updateOne(brandId: string, id: string, data: ProductDescriptor): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductsService.resource + "/" + id;
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
