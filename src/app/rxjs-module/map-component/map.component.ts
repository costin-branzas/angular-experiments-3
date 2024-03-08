import { Component } from '@angular/core';


@Component({
  selector: 'map-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='doStuff()'>Do Stuff with Map</button>
  
  </div>`
})
export class MapComponent {
  title = "MapComponentTitle";
  
  constructor() {}

  doStuff() {
    console.log("Map component doing stuff");
  }
}