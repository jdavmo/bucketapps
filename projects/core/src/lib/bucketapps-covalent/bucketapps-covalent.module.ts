import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FlexLayoutModule, } from '@angular/flex-layout';
import {
    CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule, CovalentMessageModule,
    CovalentChipsModule, CovalentFileModule,
} from '@covalent/core';
import {
    MatButtonModule, MatCardModule, MatIconModule,
    MatListModule, MatMenuModule, MatTooltipModule,
    MatSlideToggleModule, MatInputModule, MatCheckboxModule,
    MatToolbarModule, MatSnackBarModule, MatSidenavModule,
    MatTabsModule, MatSelectModule, MatChipsModule, MatRadioModule,
    MatProgressBarModule
} from '@angular/material';

const ANGULAR_MODULES: any[] = [
    FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule,
];

const FLEX_LAYOUT_MODULES: any[] = [
    FlexLayoutModule,
];

const MATERIAL_MODULES: any[] = [
    MatButtonModule, MatCardModule, MatIconModule,
    MatListModule, MatMenuModule, MatTooltipModule,
    MatSlideToggleModule, MatInputModule, MatCheckboxModule,
    MatToolbarModule, MatSnackBarModule, MatSidenavModule,
    MatTabsModule, MatSelectModule, MatChipsModule, MatRadioModule,
    MatProgressBarModule
];

const COVALENT_MODULES: any[] = [
    CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule, CovalentMessageModule,
    CovalentChipsModule, CovalentFileModule,
];

@NgModule({
    imports: [
        CommonModule,
        ANGULAR_MODULES,
        MATERIAL_MODULES,
        COVALENT_MODULES,
        FLEX_LAYOUT_MODULES
    ],
    declarations: [],
    exports: [
        ANGULAR_MODULES,
        MATERIAL_MODULES,
        COVALENT_MODULES,
        FLEX_LAYOUT_MODULES
    ]
})
export class BucketappsCovalentModule { }
