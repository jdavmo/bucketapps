import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreComponent } from './core.component';
import { BucketappsLoginModule } from './bucketapps-login/bucketapps-login.module';
import { BucketappsModule } from './bucketapps/bucketapps.module';
import { BucketappsCovalentModule } from './bucketapps-covalent/bucketapps-covalent.module';
import { BucketappsInventoryModule } from './bucketapps-inventory/bucketapps-inventory.module';

@NgModule({
    imports: [
        BucketappsCovalentModule,
        BucketappsModule,
        BucketappsLoginModule,
        BucketappsInventoryModule
    ],
    declarations: [CoreComponent],
    exports: [
        CoreComponent,
        BucketappsCovalentModule,
        BucketappsModule,
        BucketappsLoginModule,
        BucketappsInventoryModule
    ]
})
export class BucketAppsCoreModule {
    static forRoot(config: any): ModuleWithProviders {
        return {
            ngModule: BucketAppsCoreModule,
            providers: [
                { provide: 'env', useValue: config }
            ],
        };
    }
}
