import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService, LogoutService } from './services';
import { LoginComponent } from './components/login/login.component';
import { BucketappsLoginRoutingModule } from './bucketapps-login.routing';
import { BucketappsModule } from '../bucketapps/bucketapps.module';
import { BucketappsCovalentModule } from '../bucketapps-covalent/bucketapps-covalent.module';

@NgModule({
    imports: [
        CommonModule,
        BucketappsCovalentModule,
        BucketappsLoginRoutingModule,
        BucketappsModule
    ],
    providers: [LoginService, LogoutService],
    declarations: [LoginComponent]
})
export class BucketappsLoginModule {}
