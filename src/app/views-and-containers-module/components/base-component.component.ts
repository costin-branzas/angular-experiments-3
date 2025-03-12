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
    <p>span</p>
    <span #spanTarget></span>

    <br />
    <p>ng-template</p>
    <ng-template #ngTemplateTarget></ng-template>

    <br />
    <p>ng-container</p>
    <ng-container #ngContainerTarget></ng-container>

    

    <button (click)="onClick()">create sub component</button>
    
  </div>`
})
export class BaseComponent {
  title: string = "base-component";
  
  // @ViewChild('spanTarget', { read: ViewContainerRef, static: true }) spanTarget: ViewContainerRef;
  @ViewChild('spanTarget', {  }) spanTarget: any;
  
  // @ViewChild('ngTemplateTarget', { read: ViewContainerRef, static: false }) ngTemplateTarget: ViewContainerRef;
  @ViewChild('ngTemplateTarget', {  }) ngTemplateTarget: any;
  
  // @ViewChild('ngContainerTarget', { read: ViewContainerRef, static: false }) ngContainerTarget: ViewContainerRef;
  @ViewChild('ngContainerTarget', {  }) ngContainerTarget: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    console.log("BaseComponent ngAfterViewInit");
    console.log("spanTarget = ", this.spanTarget);
    console.log("ngTemplateTarget = ", this.ngTemplateTarget);
    console.log("ngContainerTarget = ", this.ngContainerTarget);

  }

  onClick() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(SubComponent);
  }

}