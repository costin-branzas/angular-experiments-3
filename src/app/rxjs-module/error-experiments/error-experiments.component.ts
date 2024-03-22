import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';


@Component({
  selector: 'error-experiments-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='thrownError()'>thrownError</button>
  <button (click)='observableError()'>observableError</button>
  
  </div>`
})
export class ErrorExperimentsComponent {
  
  thrownError() {
    console.log("thrownError");

    let observable1 = new Observable<any>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      
      let a = 1;
      if (a === 1)
        throw "thrown shit";
      
        subscriber.next(3);
      subscriber.complete();
    });

    observable1.subscribe({
      next: (data) => {
        console.log("Received: ", data);
      },
      error: (error) => {
        console.log("Error: ", error)
      },
      complete: () => {
        console.log("Completed.");
      }
    });
  }

  observableError() {
    console.log("observableError");

    let observable1 = new Observable<any>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      
      let a = Observable.throw("observable shit");
      a.subscribe();

      subscriber.next(3);
      subscriber.complete();
    });

    observable1.subscribe({
      next: (data) => {
        console.log("Received: ", data);
      },
      error: (error) => {
        console.log("Error: ", error)
      },
      complete: () => {
        console.log("Completed.");
      }
    });
  }

}