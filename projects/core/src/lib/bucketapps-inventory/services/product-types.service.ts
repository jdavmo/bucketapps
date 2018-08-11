import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { BucketappsConfigService } from '../../bucketapps/services';
import { ProductTypeSnapshot, ProductTypeDescriptor } from '../types';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class ProductTypesService extends RESTService<any> {

    static resource: string = "types";

    constructor(private _http: HttpInterceptorService, private _BucketappsConfig: BucketappsConfigService) {
        super(_http, {
            baseUrl: _BucketappsConfig.getApi(),
            path: _BucketappsConfig.buildApiPointVersionApp()
        });
    }

    /**
     *  Retrieves all
     */
    public getAll(brandId: string, searchParams: any = null): Observable<ProductTypeSnapshot> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductTypesService.resource;
            this._http.get(super.buildUrl(url, searchParams), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(ProductTypeSnapshot.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Retrives one
     */
    public getOne(brandId: string, id: string): Observable<ProductTypeDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductTypesService.resource + "/" + id;
            this._http.get(super.buildUrl(url), {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(ProductTypeDescriptor.import(response));
                observable.complete();
            });
        });
    }
    /**
     * Deletes one
     */
    public deleteOne(brandId: string, id: string): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductTypesService.resource + "/" + id;
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
    public createOne(brandId: string, data: ProductTypeDescriptor): Observable<ProductTypeDescriptor> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductTypesService.resource;
            this._http.post(super.buildUrl(url), data, {
                headers: new Headers()
            })
            .pipe(
                map(data => data.json()),
                catchError(e => throwError(e))
            )
            .subscribe(response => {
                observable.next(ProductTypeDescriptor.import(response));
                observable.complete();
            });
        });
    }

    /**
     * Update
     */
    public updateOne(brandId: string, id: string, data: ProductTypeDescriptor): Observable<any> {
        return new Observable(observable => {
            let url = brandId + "/" + ProductTypesService.resource + "/" + id;
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
