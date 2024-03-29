import { Component } from '@angular/core';


@Component({
  selector: 'highlight-directive-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p highlight-directive> text part of componenet with dirrective applied. Directive will highlight this. </p>

  </div>`
})
export class HighlightDirectiveComponent {
  title = "highlight-directive-componenet";
  
  constructor() {}

}