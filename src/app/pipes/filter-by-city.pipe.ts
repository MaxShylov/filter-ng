import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCity'
})
export class FilterByCityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map(val => console.log(val));
  }

}
