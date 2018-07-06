import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TdLoadingService, LoadingMode, LoadingType } from '@covalent/core';
import { LoginService } from '../../services/login.service';
import { BucketAppsLoginPayLoad } from '../../types';
import { BucketappsConfigService } from '../../../bucketapps/services';

@Component({
    selector: 'core-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    isHide: boolean = true;
    isInvalidLogin: boolean = false;
    
    constructor(private _router: Router,
                private _loadingService: TdLoadingService,
                private _loginService: LoginService,
                private _BucketappsConfigService: BucketappsConfigService) {

        this._loadingService.create({
            name: 'configFullscreenDemo',
            mode: LoadingMode.Indeterminate,
            type: LoadingType.Linear,
            color: 'accent',
        });
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', [
                Validators.required,
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            password: new FormControl('', [
                Validators.minLength(8),
                Validators.required
            ])
        });
    }

    toggleConfigFullscreenDemo(): void {
        this._loadingService.register('configFullscreenDemo');
        setTimeout(() => {
            this._loadingService.resolve('configFullscreenDemo');
        }, 1500);
    }

    login(): void {
        if (this.loginForm.valid) {

            this.isInvalidLogin = false;
            let login: BucketAppsLoginPayLoad = new BucketAppsLoginPayLoad();
            login = login.setDefault();
            login.username = this.loginForm.controls.username.value;
            login.password = this.loginForm.controls.password.value;
            login.client_id = this._BucketappsConfigService.getClientId();
            login.client_secret = this._BucketappsConfigService.getClientSecret();

            //this._loadingService.register();
            this._loadingService.register('configFullscreenDemo');
            this._loginService.create(login).subscribe((token: any) => {
                // store token in the local storage
                localStorage.setItem('token', token._body);
                // Go to the inventory
                this._router.navigate(['/']);
                // Stop loading
                this._loadingService.resolve('configFullscreenDemo');
            },
                err => this.logError(err, ""));
        }
    }

    /**
     * Handle the errors
     */
    logError(err: any, msg: string) {
        this.isInvalidLogin = true;
        this._loadingService.resolve('configFullscreenDemo');
    }
}

