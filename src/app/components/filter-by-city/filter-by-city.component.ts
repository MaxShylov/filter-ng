import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-filter-by-city',
  templateUrl: './filter-by-city.component.html',
  styleUrls: ['./filter-by-city.component.scss']
})
export class FilterByCityComponent implements OnInit {


  cities = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.cities = data.cities);
  }
}
