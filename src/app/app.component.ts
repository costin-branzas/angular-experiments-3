import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: 
  `<h1>{{title}}</h1>
  <a routerLink="/rxjs/basic-observables">Basic Observables</a> |
  <a routerLink="/rxjs/error-experiments">Error Experiments</a> |
  <a routerLink="/rxjs/map">Rxjs Map</a> |
  <a routerLink="/rxjs/concat-map">Rxjs ConcatMap</a> |
  <a routerLink="/http-experiments/requests">Http Requests</a> |
  <a routerLink="/directives/highlight">Highlight Directive</a> |
  <a routerLink="/directives/directives-and-change-detection">Directives and Change Detection</a> |
  <a routerLink="/date/date1">Date1</a> |
  <a routerLink="/circular-dep/circular-dep1">CircularDep1</a> |
  <a routerLink="/circular-dep/circular-dep2">CircularDep2</a> |
  <a routerLink="/testable/testable1">TestableComponent</a> |
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "AppComponentTitle";
}