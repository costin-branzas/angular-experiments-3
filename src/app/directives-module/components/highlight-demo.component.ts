import { Component } from '@angular/core';


@Component({
  selector: 'highlight-demo-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p highlight-directive>{{title}}</p>
  <p>non-highlighted text</p>  
  </div>`
})
export class HighlightDemoComponent {
  title = "HighlightDemoComponent";
  
  constructor() {}

  
}