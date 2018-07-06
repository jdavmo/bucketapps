export class BucketAppsLoginPayLoad {

    public grant_type: string;
    public client_secret: string;
    public username: string;
    public password: string;
    public scope: string;
    public client_id: number;

    constructor() { }

    public setDefault() {

        let loginPayLoad = new BucketAppsLoginPayLoad();

        loginPayLoad.grant_type = 'password';
        loginPayLoad.client_secret = "";
        loginPayLoad.username = '';
        loginPayLoad.password = '';
        loginPayLoad.scope = '*';
        loginPayLoad.client_id = 1;

        return loginPayLoad;
    }
}
