import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';


@Component({
  selector: 'basic-observables-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='basicObservable1()'>basicObservable1</button>
  <button (click)='conciseObservable()'>conciseObservable</button>
  
  </div>`
})
export class BasicObservablesComponent {
  
  //*************VERY explicitly defined observable so that it is easy to understand */
  basicObservable1() {
    console.log("basicObservable1");

    let observable1 = new Observable<string>(this.observableBehaviour);

    //actually instantiating a class object that implements the Observer interface is overkill, in the end all that the observer needs to be is a collection of 3 methods called next, error and complete - see the next concise example
    let observer1 = new Observer1<any>();

    observable1.subscribe(observer1);
  }

  observableBehaviour(subscriber:Subscriber<any>) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  }

  //*************concise observable */
  conciseObservable() {
    console.log("basicObservable1");
    let observable = new Observable<any>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });

    observable.subscribe({
      next: (data) => {
        console.log("Received: ", data);
      },
      error: (error) => {
        console.log("Error: ", error);
      },
      complete: () => {
        console.log("Completed.");
      }
    })
  }

}

//*************part of VERY explicitly defined observable so that it is easy to understand */
// because Observer is just an itnerface, we need to create a class based on it so we can then create an actual observer object
class Observer1<T> implements Observer<T> {
  next(data: T): void {
    //do shit with data
    console.log("Received: ", data);
  }

  error(error: any): void {
    //process the error as needed
    console.error("Error: ", error);
  }

  complete(): void {
    //do whatever is needed if observable ends
    console.log("Completed.");
  }
}