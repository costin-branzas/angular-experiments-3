import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RxjsModule } from './rxjs-module/rxjs-module.module'
import { HttpExperimentsModule } from './http-experiments-module/http-experiments-module.module'
import { DirectivesModule } from './directives-module/directives-module.module';
import { DateModule  } from './date-module/date-module.module';
import { CircularDepModule  } from './circular-dep/circular-dep.module';
import { TestableModule } from './testable/testable.module';
import { ViewDecoratorModule } from './view-decorator-module/view-decorator.module';
import { ViewContainerRefModule } from './view-container-ref-module/view-container-ref.module';
import { ViewsAndContainersModule } from './views-and-containers-module/views-and-containers.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'rxjs', pathMatch: 'full' },
    ]),
    
    RxjsModule,
    HttpExperimentsModule,
    DirectivesModule,
    DateModule,
    CircularDepModule,
    TestableModule,
    ViewDecoratorModule,
    ViewContainerRefModule,
    ViewsAndContainersModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
