import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-filter-by-city',
  templateUrl: './filterByCity.component.html',
  styleUrls: ['./filterByCity.component.scss']
})
export class FilterByCityComponent implements OnInit {


  cities = [];
  listOfSelectedValue = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.cities = data.cities);
  }

  getDataFilterByCity = () => this.cities;


}
