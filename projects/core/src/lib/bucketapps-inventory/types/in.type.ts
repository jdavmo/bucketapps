export class InDescriptor {
    
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
    public purchase_id: string;
    public purchase_name: string;

    constructor() {}

    public static import(rawData: any) {

        let inv_in = new InDescriptor();

        inv_in.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;

        inv_in.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        inv_in.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        inv_in.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        inv_in.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        inv_in.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        inv_in.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        inv_in.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        inv_in.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        inv_in.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';
        inv_in.barcode = rawData.hasOwnProperty('barcode') ? rawData.barcode : null;
        inv_in.date = rawData.hasOwnProperty('date') ? rawData.date : null;
        inv_in.description = rawData.hasOwnProperty('description') ? rawData.description : null;
        inv_in.purchase_id = rawData.hasOwnProperty('purchase_id') ? rawData.purchase_id : null;
        inv_in.purchase_name = rawData.hasOwnProperty('purchase_name') ? rawData.purchase_name : null;

        return inv_in;
    }

}

export class InSnapshot {

    public current_page: number;
    public data: InDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method InSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/in
     *  It returns a populated instance of type InSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in InSnapshot.import: does not have a valid product-type data");
        }

        let inv_in: InSnapshot = new InSnapshot();

        inv_in.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        inv_in.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        inv_in.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        inv_in.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        inv_in.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        inv_in.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        inv_in.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        inv_in.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        inv_in.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let type: InDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? InDescriptor.import(row) : new InDescriptor();
            inv_in.data.push(type);
        }

        return inv_in;
    }

}
