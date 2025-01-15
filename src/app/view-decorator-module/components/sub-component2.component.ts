import { Component, Input } from '@angular/core';


@Component({
  selector: 'sub-component2',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    
  </div>`
})
export class SubComponent2 {
  title = "sub-component2";

  constructor() { }

}