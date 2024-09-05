import { Component } from '@angular/core';


@Component({
  selector: 'circular-dep1',
  template: 
  `<p>{{title}}<p>`
})
export class CircularDep1 {
  title = "circular-dep1";
  
  constructor() {}

}