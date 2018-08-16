import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketappsConfigService, OctoService, UserService, ProjectsService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [BucketappsConfigService, OctoService, UserService, ProjectsService]
})
export class BucketappsModule {}
