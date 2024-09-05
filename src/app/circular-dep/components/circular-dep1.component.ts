import { Component, Input } from '@angular/core';


@Component({
  selector: 'circular-dep1',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    <!-- circular dependency warning when ng build --aot, meaning that templates are comoiled before runtime, EVEN IT the false flag actually ensure that we don't have circular depedency -->
    <circular-dep2 [enableCallbackToCircularDep1]="false"></circular-dep2>
  </div>`
})
export class CircularDep1 {
  title = "circular-dep1";

  constructor() { }

}