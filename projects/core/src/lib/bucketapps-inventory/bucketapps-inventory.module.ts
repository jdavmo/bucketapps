import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ProductsService,
    ProductTypesService,
    PurchasesService,
    InService,
    InDetailService,
    OutDetailService,
    OutService
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
        OutDetailService,
        OutService
    ],
    declarations: []
})
export class BucketappsInventoryModule { }
