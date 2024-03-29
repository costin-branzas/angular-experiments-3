import { Component } from '@angular/core';


@Component({
  selector: 'directives-experiments',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
    <!-- Observed Behaviour in Angular4: if 1 directive is used in a block with a structural directive AND calls on change detection, this will stop ngAfterViewInit being called on the other directive  -->
    <div> <!-- if this div does not have ngIf on it same as for dummy-directive2, then ngAfterViewInit will NOT get called (reproducing the bug on darwin) -->
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