import { Component, Input } from '@angular/core';


@Component({
  selector: 'circular-dep2',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    <div *ngIf="enableCallbackToCircularDep1">
        <circular-dep1></circular-dep1>
    </div>
  </div>`
})
export class CircularDep2 {
  title = "circular-dep2";

  @Input() 
  enableCallbackToCircularDep1: boolean = false;
  
  constructor() {}

}