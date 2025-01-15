import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';

import { of } from 'rxjs';

import { SubComponent1 } from './sub-component1.component';
import { SubComponent2 } from './sub-component2.component';

@Component({
  selector: 'view-child-experiment1',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    <button (click)="onClick()">doStuff</button>
    
    <sub-component1 #target [inputValue] = "value"></sub-component1>

    <!--
    <div *ngIf="switch"> 
      <sub-component1 #target></sub-component1>
    </div>
    
    <div *ngIf="!switch"> 
      <sub-component2 #target></sub-component2> 
    </div>
    -->

  </div>`
})
export class ViewChildExperiment1 {
  title: string = "view-child-experiment1";
  switch: boolean = true;
  value: number = 0;

  @ViewChild('target', {static: true})targetReference: SubComponent1 | SubComponent2;
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges() {
    console.log("*******************************");
    console.log("view-child-experiment1 ngOnChanges");
    console.log("subComponent1Reference = ", this.targetReference);
  }

  ngOnInit() {
    console.log("*******************************");
    console.log("view-child-experiment1 ngOnInit");
    console.log("subComponent1Reference = ", this.targetReference);
  }

  ngAfterViewInit() {
    console.log("*******************************");
    console.log("view-child-experiment1 ngAfterViewInit");
    console.log("subComponent1Reference = ", this.targetReference);
  }

  ngAfterViewCheked() {
    // console.log("*******************************");
    // console.log("view-child-experiment1 ngAfterViewCheked");
    // console.log("subComponent1Reference = ", this.targetReference);
  }

  ngDoCheck() {
    // console.log("*******************************");
    // console.log("view-child-experiment1 ngDoCheck");
    // console.log("subComponent1Reference = ", this.targetReference);
  }

  onClick() {
    console.log("clicked!");
    // of(1).subscribe((data)=>{console.log(data);}, (error)=>{console.log(error)}, ()=>{console.log("obs completed")}); //don't do shit, because it is not connected in any way to something part of the dom, so this is excluded from Angular Zone (i think)
    // this.title += "*";
    
    // this.cdr.markForCheck();
    // this.cdr.detectChanges();

    this.switch = this.switch ? false : true;
    this.value += 1;
  }

}