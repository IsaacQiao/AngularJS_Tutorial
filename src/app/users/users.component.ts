import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'; // RxJS is a library for reactive programming using Observables, 
// to make it easier to compose asynchronous or callback-based code.
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() { // angular lifecycle hook
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
