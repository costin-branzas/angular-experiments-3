import { Component } from '@angular/core';


@Component({
  selector: 'highlight-demo-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
    <!--<p highlight-directive>{{title}}</p>-->

    <div *ngIf="true">
      <p dummy-directive1>dummy directive 1</p> <br/>  
    </div>

    
    
    <div *ngIf="true">
      <p dummy-directive2>dummy directive 2</p>  
    <div>
    
  </div>`
})
export class HighlightDemoComponent {
  title = "HighlightDemoComponent";
  a = true;
  
  constructor() {}

  
}