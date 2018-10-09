import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketappsConfigService, OctoService, UserService, ProjectsService, UsersService } from './services';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [BucketappsConfigService, OctoService, UserService, ProjectsService, UsersService]
})
export class BucketappsModule {}
