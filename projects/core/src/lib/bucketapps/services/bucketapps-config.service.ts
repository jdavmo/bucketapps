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
    /**
     * getApiVersion
     */
    public getApiResourceVersion() {
        return this.env.config.resource.version;
    }
    /**
     * getApiResourcePoint
     */
    public getApiResourcePoint() {
        return this.env.config.resource.point;
    }
    /**
     * getApiResourceApp
     */
    public getApiResourceApp() {
        return this.env.config.resource.app;
    }
    /**
     * getApiResourceApp
     */
    public buildApiPointVersionApp() {
        let resource: string = "/";

        resource += this.getApiResourcePoint() ? this.getApiResourcePoint() + "/" : "";
        resource += this.getApiResourceVersion() ? this.getApiResourceVersion() + "/" : "";
        resource += this.getApiResourceApp() ? this.getApiResourceApp() + "/" : "";

        return resource;
    }

}
