export class ProjectsDescriptor {

    public uuid: string;
    public brandId: number;
    public comments: string;
    public created_at: string;
    public created_by: string;
    public modified_by: string;
    public name: string;
    public status: number;
    public updated_at: string;
    public city: string;
    public userName: string;
    public subtotal: string;
    public project_status: string;
    public administration: string;
    public unforeseen: string;
    public utility: string;
    public tax: string;
    public contract_cost: string;
    public start: string;
    public end: string;
    public imported: string;
    public creatorName: string;
    public modifierName: string;
    public tags: string; 

    constructor() {}

    public static import(rawData: any) {

        let project = new ProjectsDescriptor();

        project.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;

        project.comments = rawData.hasOwnProperty('comments') ? rawData.comments : null;
        project.created_at = rawData.hasOwnProperty('created_at') ? rawData.created_at : null;
        project.created_by = rawData.hasOwnProperty('created_by') ? rawData.created_by : null;
        project.modified_by = rawData.hasOwnProperty('modified_by') ? rawData.modified_by : null;
        project.name = rawData.hasOwnProperty('name') ? rawData.name : null;
        project.status = rawData.hasOwnProperty('status') ? rawData.status : null;
        project.updated_at = rawData.hasOwnProperty('updated_at') ? rawData.updated_at : null;
        project.userName = rawData.hasOwnProperty('userName') ? rawData.userName : null;
        project.uuid = rawData.hasOwnProperty('uuid') ? rawData.uuid : null;
        project.city = rawData.hasOwnProperty('city') ? rawData.city : null;
        project.subtotal = rawData.hasOwnProperty('subtotal') ? rawData.subtotal : null;
        project.project_status = rawData.hasOwnProperty('project_status') ? rawData.project_status : null;
        project.administration = rawData.hasOwnProperty('administration') ? rawData.administration : null;
        project.unforeseen = rawData.hasOwnProperty('unforeseen') ? rawData.unforeseen : null;
        project.utility = rawData.hasOwnProperty('utility') ? rawData.utility : null;
        project.tax = rawData.hasOwnProperty('tax') ? rawData.tax : null;
        project.contract_cost = rawData.hasOwnProperty('contract_cost') ? rawData.contract_cost : null;
        project.start = rawData.hasOwnProperty('start') ? rawData.start : null;
        project.end = rawData.hasOwnProperty('end') ? rawData.end : null;
        project.imported = rawData.hasOwnProperty('imported') ? rawData.imported : null;
        project.creatorName = rawData.hasOwnProperty('creatorName') ? rawData.creatorName : null;
        project.modifierName = rawData.hasOwnProperty('modifierName') ? rawData.modifierName : null;
        project.tags = rawData.hasOwnProperty('tags') ? rawData.tags : '';

        return project;
    }

}

export class ProjectsSnapshot {

    public current_page: number;
    public data: ProjectsDescriptor[] = [];
    public from: number;
    public last_page: number;
    public next_page_url: string;
    public path: string;
    public per_page: number;
    public prev_page_url: string;
    public to: number;
    public total: number;
    /**
     *  @method ProjectsSnapshot.import
     *
     *  This method expects to receive the raw object response from type endpoint
     *  /api/v1/inventroy/{brandId}/projects
     *  It returns a populated instance of type ProjectsSnapshot.
     */
    public static import(rawData: any) {

        if (!rawData.hasOwnProperty('data')) {
            throw new Error("Unexpected error in ProjectsSnapshot.import: does not have a valid product-type data");
        }

        let project: ProjectsSnapshot = new ProjectsSnapshot();

        project.current_page = rawData.hasOwnProperty('current_page') ? rawData.current_page : null;

        project.from = rawData.hasOwnProperty('from') ? rawData.from : null;
        project.last_page = rawData.hasOwnProperty('last_page') ? rawData.last_page : null;
        project.next_page_url = rawData.hasOwnProperty('next_page_url') ? rawData.next_page_url : null;
        project.path = rawData.hasOwnProperty('path') ? rawData.path : null;
        project.per_page = rawData.hasOwnProperty('per_page') ? rawData.per_page : null;
        project.prev_page_url = rawData.hasOwnProperty('prev_page_url') ? rawData.prev_page_url : null;
        project.to = rawData.hasOwnProperty('to') ? rawData.to : null;
        project.total = rawData.hasOwnProperty('total') ? rawData.total : null;

        for (var i = 0; i < rawData.data.length; i++) {
            let type: ProjectsDescriptor;
            let row = rawData.data[i];
            type = row.hasOwnProperty('uuid') ? ProjectsDescriptor.import(row) : new ProjectsDescriptor();
            project.data.push(type);
        }

        return project;
    }

}
