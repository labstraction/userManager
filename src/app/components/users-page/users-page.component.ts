import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = []

  constructor() { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(jsonArray => this.initUsers(jsonArray));
  }

  initUsers(jsonArray: any){
    this.users = jsonArray;
  }

}
