export class ProductDescriptor {

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
    public description: string;
    public img: string;
    public measure: string;
    public reference: string;
    public total: string;
    public typeName: string;
    public type_id: string;
    public weight_linear_meter: string;

    constructor() {}

    public static import(rawData: any) {

        let product = new ProductDescriptor();

        product.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        product.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        product.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        product.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        product.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        product.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        product.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        product.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        product.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        product.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';
        product.barcode = rawData.hasOwnProperty('barcode') ? rawData.barcode : null;
        product.description = rawData.hasOwnProperty('description') ? rawData.description : null;
        product.img = rawData.hasOwnProperty('img') ? rawData.img : null;
        product.measure = rawData.hasOwnProperty('measure') ? rawData.measure : null;
        product.reference = rawData.hasOwnProperty('reference') ? rawData.reference : null;
        product.total = rawData.hasOwnProperty('total') ? rawData.total : null;
        product.typeName = rawData.hasOwnProperty('typeName') ? rawData.typeName : null;
        product.type_id = rawData.hasOwnProperty('type_id') ? rawData.type_id : null;
        product.weight_linear_meter = rawData.hasOwnProperty('weight_linear_meter') ? rawData.weight_linear_meter : null;

        return product;
    }

}

export class ProductSnapshot {

    public current_page: number;
    public data: ProductDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method ProductSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/products
     *  It returns a populated instance of type ProductSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in ProductSnapshot.import: does not have a valid product-type data");
        }

        let product: ProductSnapshot = new ProductSnapshot();

        product.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        product.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        product.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        product.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        product.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        product.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        product.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        product.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        product.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let type: ProductDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? ProductDescriptor.import(row) : new ProductDescriptor();
            product.data.push(type);
        }

        return product;
    }

}
