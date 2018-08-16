export class OutDetailDescriptor {
    
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
    public contractor_id: string;
    public in_det_id: string;
    public out_id: string;
    public product_id: string;
    public product_name: string;
    public project_id: string;
    public quantity: string;
    public quantity_bad: string;

    constructor() {}

    public static import(rawData: any) {

        let outdetail = new OutDetailDescriptor();

        outdetail.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;

        outdetail.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        outdetail.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        outdetail.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        outdetail.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        outdetail.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        outdetail.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        outdetail.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        outdetail.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        outdetail.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';
        outdetail.contractor_id = rawData.hasOwnProperty('contractor_id') ? rawData.contractor_id : null;
        outdetail.in_det_id = rawData.hasOwnProperty('in_det_id') ? rawData.in_det_id : null;
        outdetail.out_id = rawData.hasOwnProperty('out_id') ? rawData.out_id : null;
        outdetail.product_id = rawData.hasOwnProperty('product_id') ? rawData.product_id : null;
        outdetail.product_name = rawData.hasOwnProperty('product_name') ? rawData.product_name : null;
        outdetail.project_id = rawData.hasOwnProperty('project_id') ? rawData.project_id : null;
        outdetail.quantity = rawData.hasOwnProperty('quantity') ? rawData.quantity : null;
        outdetail.quantity_bad = rawData.hasOwnProperty('quantity_bad') ? rawData.quantity_bad : null;

        return outdetail;
    }

}

export class OutDetailSnapshot {

    public current_page: number;
    public data: OutDetailDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method OutDetailSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/outdetail
     *  It returns a populated instance of type OutDetailSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in OutDetailSnapshot.import: does not have a valid product-type data");
        }

        let outdetail: OutDetailSnapshot = new OutDetailSnapshot();

        outdetail.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        outdetail.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        outdetail.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        outdetail.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        outdetail.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        outdetail.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        outdetail.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        outdetail.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        outdetail.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let type: OutDetailDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? OutDetailDescriptor.import(row) : new OutDetailDescriptor();
            outdetail.data.push(type);
        }

        return outdetail;
    }

}
