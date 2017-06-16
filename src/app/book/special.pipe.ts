import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'special'
})
export class SpecialPipe implements PipeTransform {
  newValue: any;

  transform(value: any, args?: any): any {
    this.newValue = value.replace(/[^a-zA-Z\s\d]+/g, '');
    console.log(this.newValue);
    return this.newValue;
  }

}
