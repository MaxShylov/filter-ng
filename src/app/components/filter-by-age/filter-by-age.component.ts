import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-by-age',
  templateUrl: './filter-by-age.component.html',
  styleUrls: ['./filter-by-age.component.scss']
})
export class FilterByAgeComponent implements OnInit {

  marks: any = {
    0: '0',
    100: '100'
  };

  changeMarks() {
    this.marks = {
      20: '20',
      99: '99',
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
