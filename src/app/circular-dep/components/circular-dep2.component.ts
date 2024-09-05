import { Component } from '@angular/core';


@Component({
  selector: 'circular-dep2',
  template: 
  `<p>{{title}}<p>`
})
export class CircularDep2 {
  title = "circular-dep2";
  
  constructor() {}

}