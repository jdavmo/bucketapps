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
    public getAll(accountId: string, searchParams: any = null): Observable<ProductTypeSnapshot> {
        return new Observable(observable => {
            let url = accountId + "/" + ProductTypesService.resource;
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
    /*public getOne(accountId: string, id: string): Observable<ProductTypeDescriptor> {
        return new Observable(observable => {
            let url = accountId + "/" + ProductTypesService.resource + "/" + id;
            super.request("GET", url)
                .asJson()
                .execute()
                .subscribe(response => {
                    observable.next(ProductTypeDescriptor.import(response));
                    observable.complete();
                }, error => {
                    observable.error(error);
                    observable.complete();
                });
        });
    }*/
    /**
     * Deletes one
     */
    /*public deleteOne(accountId: string, id: string): Observable<any> {
        return new Observable(observable => {
            let url = accountId + "/" + ProductTypesService.resource + "/" + id;
            super.request("DELETE", url)
                .asJson()
                .execute()
                .subscribe(response => {
                    observable.next(response);
                    observable.complete();
                }, error => {
                    observable.error(error);
                    observable.complete();
                });
        });
    }*/
    /**
     * Creates a new
     */
    /*public create(accountId: string, otisOption: object): Observable<ProductTypeDescriptor> {
        return new Observable(observable => {
            let url = accountId + "/" + ProductTypesService.resource;
            super.request("POST", url)
                .data(otisOption)
                .asJson()
                .execute()
                .subscribe(response => {
                    observable.next(ProductTypeDescriptor.import(response));
                    observable.complete();
                }, error => {
                    observable.error(error);
                    observable.complete();
                });
        });
    }*/

    /**
     * Update
     */
    /*public update(accountId: string, id: string, otisOption: object): Observable<ProductTypeDescriptor> {
        return new Observable(observable => {
            let url = accountId + "/" + ProductTypesService.resource + "/" + id;
            super.request("PUT", url)
                .data(otisOption)
                .asJson()
                .execute()
                .subscribe(response => {
                    observable.next(ProductTypeDescriptor.import(response));
                    observable.complete();
                }, error => {
                    observable.error(error);
                    observable.complete();
                });
        });
    }*/

}
