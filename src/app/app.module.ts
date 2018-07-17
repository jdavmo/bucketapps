import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routedComponents, routes } from './app-routing';
import { BucketAppsCoreModule } from 'core';
import { HomeComponent } from './home/home.component';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { RequestInterceptor } from './services/request.interceptor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    BucketAppsCoreModule.forRoot(environment),
    HttpClientModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
