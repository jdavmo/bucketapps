import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TdLoadingService, LoadingType, LoadingMode } from '@covalent/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

export interface ResponseList {
    current_page: number;
    data: any[];
    last_page: number;
    next_page_url: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}

export class EmitterService {
    private static _emitters: { [channel: string]: EventEmitter<any> } = {};
    static get(channel: string): EventEmitter<any> {
        if (!this._emitters[channel])
            this._emitters[channel] = new EventEmitter();
        return this._emitters[channel];
    }
}

@Injectable()
export class OctoService {

    constructor(private _translate: TranslateService,
                private _loadingService: TdLoadingService,
                public _snackBar: MatSnackBar,
                private _router: Router ) {

            this._loadingService.create({
                name: 'loading',
                type: LoadingType.Circular,
                mode: LoadingMode.Indeterminate,
                color: 'accent',
            });
            // this language will be used as a fallback when a translation isn't found in the current language
            // _translate.setDefaultLang('es');
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            // _translate.use('es');
    }

    colors: any[] = [{a: 'red'},{b: 'pink'},{c: 'purple'},{d: 'deep-purple'},
                      {e: 'indigo'},{f: 'blue'},{g: 'light-blue'},{h: 'cyan'},
                      {i: 'teal'},{j: 'green'},{k: 'light-green'},{l: 'lime'},
                      {m: 'yellow'},{o: 'amber'},{p: 'orange'},{q: 'deep-orange'},
                      {r: 'brown'},{s: 'grey'},{t: 'deep-purple'},{u: 'blue-grey'},
                      {v: 'teal'},{w: 'lime'},{x: 'pink'},{y: 'cyan'},{z: 'amber'}];
    colors2: any[] = ['red','pink','purple','deep-purple','indigo','blue','light-blue',
                      'cyan','teal','green','light-green','lime','yellow','amber','orange',
                      'deep-orange','brown','grey','deep-purple','blue-grey','teal','lime',
                      'pink','cyan','amber'];

    /**
     * Get class color by first letter
     */
    getColorClassByFirstLetter(name: string) {
        name = name.toLowerCase();
        let colorSelected = "";
        for (var i = 0; i < this.colors.length; i += 1) {
            if(this.colors[i].hasOwnProperty(name.charAt(0))) {
                colorSelected = this.colors[i][name.charAt(0)];
            }
        }
        if( !colorSelected ) {
            colorSelected = "amber";
        }
        return colorSelected;
    }
    /**
     * Get class color random
     */
    getColorClassRandom() {
        return this.colors2[Math.floor(Math.random() * this.colors2.length)]
    }
    /**
     * Open Snack bar
     */
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 5000,
        });
    }
    /**
     * Handle errors
     */
    requireLogin(): void {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    }
    /**
     * Handle errors
     */
    error(err: any, msg: string) {
        this._loadingService.resolve('loading');
        if ( msg ) {
            this.openSnackBar(msg, "Ok");
        } else if ( !err.status ) {
            if ( err ) {
                if(err.hasOwnProperty('error') && err.error === 'Unauthenticated.') {
                    this.requireLogin();
                } else {
                    for(let key of Object.keys(err)) {
                        this.openSnackBar(err[key][0], "Ok");
                    }
                }
            }
        } else {
            this._translate.get('INV.ERROR').subscribe(s => {
                this.openSnackBar(s[err.status], "Ok");
            });
        }
    }
    /**
     * Show message
     */
    showMesage(msg: string) {
        this.openSnackBar(msg, "Ok");
    }
    /**
     * Print section
     */
    printSection(id: string): void {
        let printContents, popupWin;
        printContents = document.getElementById(id).innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
          <html>
            <head>
              <title>Print tab</title>
              <style>
              .print-section {
                  border: #000 1px solid;
                  padding: 15px;
                  border-radius: 10px;
                  text-align: center;
                  width: 310px;
              }
              .barcode-name {
                  font-size: 10px;
              }
              </style>
            </head>
        <body onload="window.print();window.close()">${printContents}</body>
          </html>`
        );
        popupWin.document.close();
    }
    /**
     * Default structure to handle the barcode
     */
    defaultConfigBarcode() {
        return {
            elementType: 'svg',
            value: [''],
            format: 'CODE128',
            lineColor: '#000000',
            width: 2,
            height: 30,
            displayValue: true,
            fontOptions: '',
            font: 'monospace',
            textAlign: 'center',
            textPosition: 'bottom',
            textMargin: 2,
            fontSize: 18,
            background: '#ffffff',
            margin: 7,
            marginTop: 7,
            marginBottom: 7,
            marginLeft: 7,
            marginRight: 7
        }
    }

    addTag(newTag: string, actualTags: string) {
        let tags: any;
        let alreadyThere: any;
        if (actualTags) {
            tags = actualTags.split(",");
        }
        if (tags) {
            alreadyThere = tags.some(item => item === newTag);
        }
        if (!alreadyThere && actualTags) {
            actualTags = actualTags + "," + newTag;
        } else if (!tags) {
            actualTags = newTag;
        }
        return actualTags;
    }
}
