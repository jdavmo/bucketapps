import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketappsConfigService, OctoService, UserService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [BucketappsConfigService, OctoService, UserService]
})
export class BucketappsModule {}
