import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'sub-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    <p>inputValue={{inputValue}}<p>
    
    <h1 #target *ngIf="inputValue >= 3" >heading1 (inputValue >= 3)</h1>
    <h2 #target>heading2</h2>
  </div>
  `
})
export class SubComponent {
  title = "sub-component";

  @Input()inputValue: number = 1;

  @ViewChild('target', {static: false}) targetReference: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("**** **** sub-component ngOnChanges");
    console.log("changes = ", changes);
    console.log("targetReference = ", this.targetReference);
  }
  
  ngOnInit() {
    console.log("**** **** sub-component ngOnInit");
    console.log("targetReference = ", this.targetReference);

  }

  ngAfterViewInit() {
    console.log("**** **** sub-component ngAfterViewInit");
    console.log("targetReference = ", this.targetReference);
  }

  ngAfterViewChecked() {
    console.log("**** **** sub-component ngAfterViewCheked");
    console.log("targetReference = ", this.targetReference);
  }
}