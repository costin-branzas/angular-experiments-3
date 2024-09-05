import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';


@Component({
  selector: 'error-experiments-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  <button (click)='thrownError()'>thrownError</button>
  <button (click)='observableError()'>observableError</button>
  <button (click)='thrownErrorWithTryCatch()'>thrownErrorWithTryCatch</button>
  
  </div>`
})
export class ErrorExperimentsComponent {
  title = "error-experiments-component";
  
  //********************** */
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
        console.log("Error: ", error);
        console.log("typeof error: ", typeof error);
      },
      complete: () => {
        console.log("Completed.");
      }
    });
  }

  //********************** */
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
        console.log("Error: ", error);
        console.log("typeof error: ", typeof error);
      },
      complete: () => {
        console.log("Completed.");
      }
    });
  }


  //********************** */
  thrownErrorWithTryCatch() {
    console.log("thrownError");

    let observable1 = new Observable<any>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      
      try {
        let a = 1;
        if (a === 1)
          throw "thrown shit but tried and caught";
      }
      catch (error) {
        subscriber.error(error);
      }

      subscriber.next(3);
      subscriber.complete();
    });

    observable1.subscribe({
      next: (data) => {
        console.log("Received: ", data);
      },
      error: (error) => {
        console.log("Error: ", error);
        console.log("typeof error: ", typeof error);
      },
      complete: () => {
        console.log("Completed.");
      }
    });
  }
}