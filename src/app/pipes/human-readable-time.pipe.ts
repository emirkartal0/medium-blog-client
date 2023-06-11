import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadableTime'
})
export class HumanReadableTimePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    return date.toLocaleString();
  }

}
