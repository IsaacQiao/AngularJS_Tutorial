// service file is for putting a part of reusable code that will be used by a lot of components.
// like a API that will get data from DB 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({// injectable decorators
  providedIn: 'root'
})
export class DataService {// logic of the service

  // class
  // get an instance of HttpClient by puting it into the constructor()
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users') // a testing page from jsonplaceholder
  }
}
