import { Component } from '@angular/core';


@Component({
  selector: 'map-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  
  <button (click)='dateFromDateObject()'>dateFromDateObject</button> <br/>

  </div>`
})
export class Date1Component {
  title = "Date1ComponentTitle";
  
  constructor() {
  }

  dateFromDateObject() {
    console.log("dateFromDateObject");
    let a = new Date();
    console.log(a);

    let a2 = new Date(a);
    console.log(a2);
  }

}