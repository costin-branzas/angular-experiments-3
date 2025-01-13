import { Component, Input } from '@angular/core';


@Component({
  selector: 'sub-component1',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    
  </div>`
})
export class SubComponent1 {
  title = "sub-component1";

  constructor() { }

}