import { Component, Input } from '@angular/core';

import { interval } from 'rxjs';


@Component({
  selector: 'sub-component1',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    <p>{{inputValue}}</p>
    
  </div>`
})
export class SubComponent1 {
  title = "sub-component1";

  @Input() inputValue: number;

  constructor() { }

  ngOnChanges(changes) {
    console.log("sub-component1 ngOnChanges");
    console.log("changes = ", changes);
  }

}