import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';


@Component({
  selector: 'testable-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  
  </div>`
})
export class TestableComponent {
  title = "testable-component";

  public publicMethod() {
    console.log("publicMethod running");
    this.privateMethod();
  }

  public publicMethod2() {
    console.log("publicMethod2 running");
    this.privateMethod();
  }

  private privateMethod() {
    console.log("privateMethod running");
  }

}