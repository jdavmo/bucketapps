import { NgModule, ModuleWithProviders } from '@angular/core';
import { CoreComponent } from './core.component';
import { BucketappsLoginModule } from './bucketapps-login/bucketapps-login.module';
import { BucketappsModule } from './bucketapps/bucketapps.module';
import { BucketappsCovalentModule } from './bucketapps-covalent/bucketapps-covalent.module';
import { InjectionToken } from '@angular/core';

export interface Config {
    production?: string;
}

export const LIB_CONFIG = new InjectionToken<Config>('LIB_CONFIG');

@NgModule({
    imports: [
        BucketappsCovalentModule,
        BucketappsModule,
        BucketappsLoginModule
    ],
    declarations: [CoreComponent],
    exports: [
        CoreComponent,
        BucketappsCovalentModule,
        BucketappsModule,
        BucketappsLoginModule
    ]
})
export class CoreModule {
    static forRoot(config: any): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: 'env', useValue: config }
            ],
        };
    }
}
