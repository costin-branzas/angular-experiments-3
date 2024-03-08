import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RxjsModule } from './rxjs-module/rxjs-module.module'


@NgModule({
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
    ]),
    
    RxjsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
