import { Component } from '@angular/core';

@Component({
  selector: 'base-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
    <p>{{title}}<p>
    
    <button (click)="onClick()">increment inputValue for sub-component</button>
    
    <sub-component [inputValue] = "someValue"></sub-component>

  </div>`
})
export class BaseComponent {
  title: string = "base-component";
  someValue: number = 1;

  constructor() { }

  // ngOnChanges() {
  //   console.log("**** base-component ngOnChanges");
  // }
  
  // ngOnInit() {
  //   console.log("**** base-component ngOnInit");
  // }

  // ngAfterViewInit() {
  //   console.log("**** base-component ngAfterViewInit");
  // }

  // ngAfterViewChecked() {
  //   console.log("**** base-component ngAfterViewCheked");
  // }

  onClick() {
    this.someValue += 1;
  }

}