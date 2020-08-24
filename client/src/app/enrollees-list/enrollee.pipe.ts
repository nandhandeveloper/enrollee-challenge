import { Pipe, PipeTransform } from '@angular/core';
import { Enrollee } from './enrollee.model';


@Pipe({
  name: 'enrollee'
})
export class EnrolleePipe implements PipeTransform {
  /**
   * Filters the Enrollee list based on the Status or Active values of Enrollee.
   * @param value -  A array of Enrollees
   * @param args  - An array of paramertrs passed to the filter
   */
  transform(value: Enrollee[], ...args: string[]): Enrollee[] {
    const [filter] = args;
    if (filter === 'ACTIVE') {
      return value.filter(item => item.active);
    } else if (filter === 'INACTIVE') {
      return value.filter(item => !item.active);
    } else {
      return value;
    }

  }

}
