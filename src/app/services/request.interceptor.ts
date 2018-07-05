import { Injectable } from '@angular/core';
import { RequestOptionsArgs } from '@angular/http';
import { IHttpInterceptor } from '@covalent/http';

@Injectable()
export class RequestInterceptor implements IHttpInterceptor {
    onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
        // you add headers or do something before a request here.
        let token = localStorage.getItem('token')
        if (token) {
            token = JSON.parse(token).access_token;
            requestOptions.headers.set('Authorization', `Bearer ${token}`);
        }
        return requestOptions;
    }
}
