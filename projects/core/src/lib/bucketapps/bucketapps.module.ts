import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketappsConfigService } from './services/bucketapps-config.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [BucketappsConfigService]
})
export class BucketappsModule {}
