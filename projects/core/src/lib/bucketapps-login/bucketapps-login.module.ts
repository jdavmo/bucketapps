import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
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
    providers: [LoginService],
    declarations: [LoginComponent]
})
export class BucketappsLoginModule {}
