import { Component } from '@angular/core';

@Component({
  selector: 'sub-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>

  </div>`
})
export class SubComponent {
  title: string = "sub-component";

  constructor() { }


}