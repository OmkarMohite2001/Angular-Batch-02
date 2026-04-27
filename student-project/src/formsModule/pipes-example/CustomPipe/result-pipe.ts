import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result',
})
export class ResultPipe implements PipeTransform {

  transform(value: number): string {
    return value >= 35 ? 'Pass':'Fail';
  }

}
