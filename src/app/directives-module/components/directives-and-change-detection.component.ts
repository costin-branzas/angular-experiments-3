import { Component } from '@angular/core';


@Component({
  selector: 'directives-experiments',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
    <div *ngIf="true"> <!-- if this div does not have ngIf on it same as for dummy-directive2, then ngAfterViewInit will NOT get called (reproducing the bug on darwin) -->
      <p dummy-directive1>dummy directive 1</p> <br/>  
    </div>
    
    <div *ngIf="true">
      <p dummy-directive2>dummy directive 2</p>  
    <div>
    
  </div>`
})
export class DirectivesAndChangeDetectionComponent {
  title = "directives-experiments";
  
  constructor() {}

}