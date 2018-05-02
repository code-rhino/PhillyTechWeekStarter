import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BadWordPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'badWord',
})
export class BadWordPipe implements PipeTransform {

  transform(value: string, ...args) {
    return value;
  }
}
