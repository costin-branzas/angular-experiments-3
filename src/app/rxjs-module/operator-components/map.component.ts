import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';


@Component({
  selector: 'map-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='doStuff()'>Do Stuff with Map</button>
  
  </div>`
})
export class MapComponent {
  title = "MapComponentTitle";
  
  

  constructor() {}

  doStuff() {
    console.log("Map component doing stuff");

    let observer1 = new Observer1<string>();

    let observable1 = new Observable<string>(this.observableBehaviour).map(this.mapFunctionality);

    observable1.subscribe(observer1);

  }

  observableBehaviour(subscriber:Subscriber<any>) {
    for (let i=1; i<=10; i++)
    {
      subscriber.next(i.toString());
    }
    subscriber.complete();
  }

  mapFunctionality(data: string) {
    return data + " with some stuff added to it by map operator";
  }

}

class Observer1<T> implements Observer<T> {
  next(x: T): void {
    //do shit with X
    console.log(x);
  }

  error(error: any): void {
    console.error(error);
  }

  complete(): void {
    //do whatever is needed if observable ends
    console.log("done");
  }
}