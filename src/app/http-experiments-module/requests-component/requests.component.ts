import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'map-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  
  <button (click)='okEmpty()'>okEmpty</button> <br/>
  <button (click)='okString()'>okString</button> <br/>
  <button (click)='okArrayOfObjects()'>okArrayOfObjects</button> <br/>
  <button (click)='badEmpty()'>badEmpty</button> <br/>
  <button (click)='badArrayOfObjects()'>badArrayOfObjects</button> <br/>

  </div>`
})
export class RequestsComponent {
  title = "RequestsComponentTitle";
  
  private httpClient: HttpClient;
  private apiUrl = "http://localhost:5014/";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  generateHeaders() {
    let headers = new HttpHeaders();

    headers = headers.append("Access-Control-Allow-Origin","*");

    return headers;
  }

  generateOptions(): Object {
    return {
      //observe: 'body',
      //responseType: 'json',
      //headers: this.generateHeaders()
    };
  }

  okEmpty() {
    console.log("OkEmpty");

    let getObservable = this.httpClient.get<any>(this.apiUrl + "controller1/ok-empty", this.generateOptions());

    getObservable.subscribe({
      next: (data) => {console.log("OkEmpty response: ", data);},
      // error: (error) => {console.log("Get Request error: ", error );}
    })
  }

  okString() {
    console.log("OkString");

    let getObservable = this.httpClient.get<any>(this.apiUrl + "controller1/ok-string", this.generateOptions());

    getObservable.subscribe({
      next: (data) => {console.log("OkString response: ", data);},
      // error: (error) => {console.log("Get Request error: ", error );}
    })
  }

  okArrayOfObjects() {
    console.log("OkArrayOfObjects");

    let getObservable = this.httpClient.get<any>(this.apiUrl + "controller1/ok-array-of-objects", this.generateOptions())

    getObservable.subscribe({
      next: (data) => {console.log("OkArrayOfObjects response: ", data);},
      // error: (error) => {console.log("Get Request error: ", error );}
    })
  }

  

  // observableBehaviour(subscriber:Subscriber<any>) {
  //   subscriber.next("bla bla...");
  //   subscriber.complete();
  // }

}