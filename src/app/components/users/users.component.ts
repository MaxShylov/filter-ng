import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FilterByCityComponent } from '../filterByCity/filterByCity.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  filterCity = [];

  constructor(
    private usersService: UsersService,
    private filterByCity: FilterByCityComponent
  ) {}

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data.users);

    this.filterCity = this.filterByCity.listOfSelectedValue;

    console.log(this.filterByCity);
  }

}
