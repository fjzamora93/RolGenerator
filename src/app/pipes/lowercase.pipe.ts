import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercase',
  standalone: true
})
export class LowerFirstLetterPipe implements PipeTransform {

    transform(value: string): string {
        return value.charAt(0).toLowerCase() + value.slice(1);
      }

}
