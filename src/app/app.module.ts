import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RxjsModule } from './rxjs-module/rxjs-module.module'
import { HttpExperimentsModule } from './http-experiments-module/http-experiments-module.module'


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
    ]),
    
    RxjsModule,
    HttpExperimentsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
