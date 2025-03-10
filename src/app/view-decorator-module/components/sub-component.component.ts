import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { of } from 'rxjs';


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

  @ViewChild('target') targetReference: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("**** **** sub-component ngOnChanges");
    console.log("changes = ", changes);
    console.log("targetReference = ", this.targetReference);    
  }
  
  ngOnInit() {
    console.log("**** **** sub-component ngOnInit");
    console.log("targetReference = ", this.targetReference);

    //he observable below does not trigger change detection, and the next handler runs as soon as the observable is subscribed, however the aMethod body (that is wraped in setTimeout) will run AFTER change detection
    of(1).subscribe((data)=>{
      console.log("**** **** sub-component ngOnInit observable next");
      console.log("targetReference = ", this.targetReference);
      this.aMethod();
    });
  }

  ngAfterViewInit() {
    console.log("**** **** sub-component ngAfterViewInit");
    console.log("targetReference = ", this.targetReference);
  }

  ngAfterViewChecked() {
    console.log("**** **** sub-component ngAfterViewCheked");
    console.log("targetReference = ", this.targetReference);
  }

  private aMethod(){
    setTimeout(() => {
      console.log("**** **** sub-component aMethod");
      console.log("targetReference = ", this.targetReference); // because this is in a timeout, by the time it runs, change detection will have finished, no matter the actual timeout value - 0 or an actual number
    }, 0);
    console.log("**** **** sub-component aMethod outside setTimeout");
    console.log("targetReference = ", this.targetReference);
  }
}