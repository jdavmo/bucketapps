import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BucketappsConfigService {

    constructor(@Inject('env') private env) {}

    /**
     * getConfig
     */
    public getConfig() {
        return this.env;
    }
    /**
     * getApi
     */
    public getApi() {
        return this.env.config.api;
    }
    /**
     * getClientId
     */
    public getClientId() {
        return this.env.config.client_id;
    }
    /**
     * getClientSecret
     */
    public getClientSecret() {
        return this.env.config.client_secret;
    }
}
