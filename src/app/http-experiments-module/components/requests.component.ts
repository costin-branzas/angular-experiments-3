import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'map-component',
  template: 
  `<div style = "border:1px solid black; padding: 10px;">
  
  <p>{{title}}</p>
  
  <button (click)='okEmpty()'>okEmpty</button> <br/>
  <button (click)='okStringSimple()'>okStringSimple</button> <br/>
  <button (click)='okStringJson()'>okStringJson</button> <br/>
  <button (click)='okArrayOfObjects()'>okArrayOfObjects</button> <br/>
  <button (click)='okMultipleTypes()'>okMultipleTypes</button> <br/>
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

    //headers = headers.append("Access-Control-Allow-Origin","*");

    return headers;
  }

  generateOptions(): Object {
    return {
      //observe: 'response',
      
      //responseType: 'json',
      //responseType: 'text',
      //responseType: 'text' as 'json',

      headers: this.generateHeaders()
    };
  }

  okEmpty() {
    console.log("okEmpty");

    let getObservable = this.httpClient.get<void>(this.apiUrl + "controller1/ok-empty", this.generateOptions());

    getObservable.subscribe({
      next: (data) => {console.log("okEmpty response: ", data);},
      error: (error) => {console.log("okEmpty error: ", error );}
    })
  }

  okStringSimple() {
    console.log("okStringSimple");

    let getObservable = this.httpClient.get<string>(this.apiUrl + "controller1/ok-string-simple", this.generateOptions());

    getObservable.subscribe({
      next: (data) => {console.log("okStringSimple response: ", data);},
      error: (error) => {console.log("okStringSimple error: ", error );}
    })
  }

  okStringJson() {
    console.log("okStringJson");

    let getObservable = this.httpClient.get<string>(this.apiUrl + "controller1/ok-string-json", this.generateOptions());

    getObservable.subscribe({
      next: (data) => {console.log("okStringJson response: ", data);},
      error: (error) => {console.log("okStringJson error: ", error );}
    })
  }

  okArrayOfObjects() {
    console.log("okArrayOfObjects");

    let getObservable = this.httpClient.get<DummyObject2[]>(this.apiUrl + "controller1/ok-array-of-objects", this.generateOptions())

    getObservable.subscribe({
      next: (data) => {console.log("okArrayOfObjects response: ", data);},
      error: (error) => {console.log("okArrayOfObjects error: ", error );}
    })
  }

  okMultipleTypes() {
    console.log("okMultipleTypes");

    let getObservable = this.httpClient.get<void | string| DummyObject2[]>(this.apiUrl + "controller1/ok-multiple-types", this.generateOptions())

    getObservable.subscribe({
      next: (data) => {
        console.log("okMultipleTypes response: ", data);
      },
      error: (error) => {console.log("okMultipleTypes error: ", error );}
    })
  }

  badEmpty() {
    console.log("badEmpty");

    let getObservable = this.httpClient.get<any>(this.apiUrl + "controller1/bad-empty", this.generateOptions())

    getObservable.subscribe({
      next: (data) => {console.log("badEmpty response: ", data);},
      error: (error) => {console.log("badEmpty error: ", error );}
    })
  }

  badArrayOfObjects() {
    console.log("badArrayOfObjects");

    let getObservable = this.httpClient.get<any>(this.apiUrl + "controller1/bad-array-of-objects", this.generateOptions())

    getObservable.subscribe({
      next: (data) => {console.log("badArrayOfObjects response: ", data);},
      error: (error) => {console.log("badArrayOfObjects error: ", error );}
    })
  }

}

interface DummyObject {
  id: number,
  someString: string
}

interface DummyObject2 {
  id2: number,
  someString2: string,
  someObject: Object
}