import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location,age&results=80&nat=gb')
      .map(res => res.json())
      .map(res => res.results)
      .map(users => {
          const
            cities: any = new Set(),
            us = users.map(u => {
              cities.add(u.location.city);

              return ({
                name: u.name.first + ' ' + u.name.last,
                image: u.picture.large,
                geo: {
                  city: u.location.city,
                  state: u.location.state,
                  street: u.location.street
                }
              });
            }),
            data = {
              cities: [],
              users: us
            };

          Array.from(cities).map(city => data.cities.push({
            value: city,
            label: city
          }));

          console.log(data);

          return data;
        }
      );
  }

}
