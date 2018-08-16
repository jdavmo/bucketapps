export class PurchaseDescriptor {

    public brandId: number;
    public comments: string;
    public created_at: string;
    public created_by: string;
    public modified_by: string;
    public status: number;
    public updated_at: string;
    public userName: string;
    public uuid: string;
    public tags: string;
    public barcode: string;
    public date: string;
    public description: string;
    public location: string;
    public measure: string;
    public price: string;
    public provider: string;

    constructor() {}

    public static import(rawData: any) {

        let purchase = new PurchaseDescriptor();

        purchase.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        purchase.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        purchase.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        purchase.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        purchase.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        purchase.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        purchase.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        purchase.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        purchase.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        purchase.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';
        purchase.barcode = rawData.hasOwnProperty('barcode') ? rawData.barcode : null;
        purchase.date = rawData.hasOwnProperty('date') ? rawData.date : null;
        purchase.description = rawData.hasOwnProperty('description') ? rawData.description : null;
        purchase.location = rawData.hasOwnProperty('location') ? rawData.location : null;
        purchase.measure = rawData.hasOwnProperty('measure') ? rawData.measure : null;
        purchase.price = rawData.hasOwnProperty('price') ? rawData.price : null;
        purchase.provider = rawData.hasOwnProperty('provider') ? rawData.provider : null;

        return purchase;
    }

}

export class PurchaseSnapshot {

    public current_page: number;
    public data: PurchaseDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method PurchaseSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/purchases
     *  It returns a populated instance of type PurchaseSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in PurchaseSnapshot.import: does not have a valid product-type data");
        }

        let purchase: PurchaseSnapshot = new PurchaseSnapshot();

        purchase.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        purchase.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        purchase.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        purchase.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        purchase.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        purchase.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        purchase.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        purchase.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        purchase.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let type: PurchaseDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? PurchaseDescriptor.import(row) : new PurchaseDescriptor();
            purchase.data.push(type);
        }

        return purchase;
    }

}
