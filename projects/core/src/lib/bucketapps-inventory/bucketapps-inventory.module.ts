import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ProductsService,
    ProductTypesService,
    PurchasesService,
    InService,
    InDetailService,
    OutDetailService
} from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ProductsService,
        ProductTypesService,
        PurchasesService,
        InService,
        InDetailService,
        OutDetailService
    ],
    declarations: []
})
export class BucketappsInventoryModule { }
