import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FilterByCityComponent } from '../filter-by-city/filter-by-city.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private usersService: UsersService,) {}

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data.users);
  }

}
