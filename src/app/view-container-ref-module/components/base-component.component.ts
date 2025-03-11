import { Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SubComponent } from './sub-component.component';

@Component({
  selector: 'base-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    
    <div style = "border:1px solid red; padding: 10px;">
      <p>Red paragraph text</p>
    </div>
    
    <br />
    <p>span static</p>
    <span #target1></span>

    <br />
    <p>span dynamic</p>
    <span #target2></span>
    
    <br />
    <p>ng-template</p>
    <ng-template #target3></ng-template>

    <br />
    <p>ng-container</p>
    <ng-container #target4></ng-container>

    <br />
    <p>span dynamic, default element (no read)</p>
    <span #target5></span>

    <br />
    <p>ng-template, default element (no read)</p>
    <ng-template #target6></ng-template>
    
    <br />
    <div style = "border:1px solid blue; padding: 10px;">
      <p>Blue paragraph text</p>
    </div>

    <button (click)="onClick()">create sub component</button>
    
  </div>`
})
export class BaseComponent {
  title: string = "base-component";
  
  @ViewChild('target1', { read: ViewContainerRef, static: true }) target1: ViewContainerRef;
  @ViewChild('target2', { read: ViewContainerRef, static: false }) target2: ViewContainerRef;
  @ViewChild('target3', { read: ViewContainerRef, static: false }) target3: ViewContainerRef;
  @ViewChild('target4', { read: ViewContainerRef, static: false }) target4: ViewContainerRef;
  @ViewChild('target5', {  }) target5: any;
  @ViewChild('target6', {  }) target6: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    // console.log("BaseComponent ngAfterViewInit");
    // console.log("target1 = ", this.target1);
    // console.log("target2 = ", this.target2);
    // console.log("target3 = ", this.target3);
    // console.log("target4 = ", this.target4);
    console.log("target5 = ", this.target5);
    console.log("target6 = ", this.target6);
    //console.log()

  }

  onClick() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(SubComponent);

    this.target1.createComponent(factory);
    this.target2.createComponent(factory);
    this.target3.createComponent(factory);
    this.target4.createComponent(factory);
  }

}