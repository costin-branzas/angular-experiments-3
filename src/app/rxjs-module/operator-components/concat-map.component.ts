import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { interval } from 'rxjs/observable/interval';


@Component({
  selector: 'concat-map-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='doConcatMap()'>doConcatMap</button>
  
  </div>`
})
export class ConcatMapComponent {
  title = "ConcatMapComponentTitle";
  
  constructor() {}

  doConcatMap() {
    console.log("concatMap");

    let observable1 = new Observable<any>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    })
    .concatMap((data, index) => {
      console.log("concatMap data/index: ", data, "/", index);
      
      //create and return the new observable
      return new Observable<string>(innerSubscriber => {
        innerSubscriber.next(data.toString() + "unRahatMic");
        innerSubscriber.next(data.toString() + "unRahatMare");
        innerSubscriber.complete();
      });
      
      //replicate what we have on Darwin (stupid because if no observable is return program crashes...)
      // let a = 1;
      // if (a % 2 == 0)
      //   return Observable.of(data.toString() + " cu un mare caca");
      
      //something with time
      //return Observable.interval(1000).take(3);
    });

    observable1.subscribe({
      next: (data) => {
        console.log("Received: ", data);
      },
      error: (error) => {
        console.log("Error: ", error);
      },
      complete: () => {
        console.log("Complete.");
      }
    });

  }

  // concatMapFunctionality(data: string) {
  //   //return data + "";
  //   return "";
  // }
}