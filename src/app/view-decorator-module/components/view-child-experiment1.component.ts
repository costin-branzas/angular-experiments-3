import { Component, Input } from '@angular/core';


@Component({
  selector: 'view-child-experiment1',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    <sub-component1></sub-component1>
    
  </div>`
})
export class ViewChildExperiment1 {
  title = "view-child-experiment1";
  
  constructor() { }

}