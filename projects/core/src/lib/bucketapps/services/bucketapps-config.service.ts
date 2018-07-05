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
        return this.env;
    }

}
