import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketappsConfigService, OctoService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [BucketappsConfigService, OctoService]
})
export class BucketappsModule {}
