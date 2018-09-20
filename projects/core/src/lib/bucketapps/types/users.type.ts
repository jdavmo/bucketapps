export class UserDescriptor {

    public id: number;
    public created_at: string;
    public name: string;
    public updated_at: string;
    public timezone: string;
    public language: string;
    public email: string;
    public default_brand_id: number;

    constructor() {}

    public static import(rawData: any) {

        let user = new UserDescriptor();

        user.id = rawData.hasOwnProperty('id') ? rawData.id : null;
        user.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        user.name = rawData.hasOwnProperty('name') ? rawData.name : null;
        user.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        user.timezone = rawData.hasOwnProperty('timezone') ? rawData.timezone : null;
        user.language = rawData.hasOwnProperty('language') ? rawData.language : null;
        user.email = rawData.hasOwnProperty('email') ? rawData.email : null;
        user.default_brand_id = rawData.hasOwnProperty('default_brand_id') ? rawData.default_brand_id : null;

        return user;
    }

}

export class UsersSnapshot {

    public current_page: number;
    public data: UserDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method UsersSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/users
     *  It returns a populated instance of type UsersSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in UsersSnapshot.import: does not have a valid product-type data");
        }

        let users: UsersSnapshot = new UsersSnapshot();

        users.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        users.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        users.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        users.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        users.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        users.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        users.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        users.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        users.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let user: UserDescriptor;
            let row = rawData.data[i];
            user = row.hasOwnProperty('id') ? UserDescriptor.import(row) : new UserDescriptor();
            users.data.push(user);
        }

        return users;
    }

}
