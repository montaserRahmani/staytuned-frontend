import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { ShellModule } from './shell/shell.module';
import { ToastrModule } from 'ngx-toastr'
import { StorageService } from './shared/storage.service';
import { ApiPrefixInterceptor } from './shared/api-prefix.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
    }),
    ProductModule,
    HomeModule,
    ShellModule,
    AppRoutingModule
  ],
  providers: [
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
