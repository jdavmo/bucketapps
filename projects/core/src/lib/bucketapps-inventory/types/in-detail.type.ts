export class InDetailDescriptor {

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
    public barcode_print: string;
    public color: string;
    public in_id: string;
    public length: string;
    public measure: string;
    public product_barcode: string;
    public product_id: string;
    public product_name: string;
    public purchase_barcode: string;
    public purchase_name: string;
    public quantity: number;
    public quantity_bad: number;
    public quantity_out: number;
    public totalTransactionsOut: number;
    public total: number;

    constructor() {}

    public static import(rawData: any) {

        let inDetail = new InDetailDescriptor();

        inDetail.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;

        inDetail.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        inDetail.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        inDetail.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        inDetail.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        inDetail.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        inDetail.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        inDetail.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        inDetail.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        inDetail.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';
        inDetail.barcode = rawData.hasOwnProperty('barcode') ? rawData.barcode : null;
        inDetail.barcode_print = rawData.hasOwnProperty('barcode_print') ? rawData.barcode_print : null;
        inDetail.color = rawData.hasOwnProperty('color') ? rawData.color : null;
        inDetail.in_id = rawData.hasOwnProperty('in_id') ? rawData.in_id : null;
        inDetail.length = rawData.hasOwnProperty('length') ? rawData.length : null;
        inDetail.measure = rawData.hasOwnProperty('measure') ? rawData.measure : null;
        inDetail.product_barcode = rawData.hasOwnProperty('product_barcode') ? rawData.product_barcode : null;
        inDetail.product_id = rawData.hasOwnProperty('product_id') ? rawData.product_id : null;
        inDetail.product_name = rawData.hasOwnProperty('product_name') ? rawData.product_name : null;
        inDetail.purchase_barcode = rawData.hasOwnProperty('purchase_barcode') ? rawData.purchase_barcode : null;
        inDetail.purchase_name = rawData.hasOwnProperty('purchase_name') ? rawData.purchase_name : null;
        inDetail.quantity = rawData.hasOwnProperty('quantity') ? rawData.quantity : null;
        inDetail.quantity_bad = rawData.hasOwnProperty('quantity_bad') ? rawData.quantity_bad : null;
        inDetail.quantity_out = rawData.hasOwnProperty('quantity_out') ? rawData.quantity_out : null;
        inDetail.totalTransactionsOut = rawData.hasOwnProperty('totalTransactionsOut') ? rawData.totalTransactionsOut : null;
        inDetail.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        return inDetail;
    }

}

export class InDetailSnapshot {

    public current_page: number;
    public data: InDetailDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method InDetailSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/indetail
     *  It returns a populated instance of type InDetailSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in InDetailSnapshot.import: does not have a valid product-type data");
        }

        let productType: InDetailSnapshot = new InDetailSnapshot();

        productType.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        productType.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        productType.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        productType.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        productType.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        productType.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        productType.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        productType.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        productType.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let type: InDetailDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? InDetailDescriptor.import(row) : new InDetailDescriptor();
            productType.data.push(type);
        }

        return productType;
    }

}
