export class ProductTypeDescriptor {

    public brandId: number;
    public comments: string;
    public created_at: string;
    public created_by: string;
    public modified_by: string;
    public name: string;
    public status: number;
    public updated_at: string;
    public userName: string;
    public uuid: string;
    public tags: string;

    constructor() {}

    public static import(rawData: any) {

        let productType = new ProductTypeDescriptor();

        productType.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;

        productType.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        productType.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        productType.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        productType.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        productType.name = rawData.hasOwnProperty('name') ? rawData.name : null;
        productType.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        productType.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        productType.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        productType.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        productType.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';

        return productType;
    }

}

export class ProductTypeSnapshot {

    public current_page: number;
    public data: ProductTypeDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method ProductTypeSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/types
     *  It returns a populated instance of type ProductTypeSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in ProductTypeSnapshot.import: does not have a valid product-type data");
        }

        let productType: ProductTypeSnapshot = new ProductTypeSnapshot();

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
            let type: ProductTypeDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? ProductTypeDescriptor.import(row) : new ProductTypeDescriptor();
            productType.data.push(type);
        }

        return productType;
    }

}
