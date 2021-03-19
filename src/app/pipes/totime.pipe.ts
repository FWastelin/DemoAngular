import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totime'
})
export class TotimePipe implements PipeTransform {

  //  transform(value: unknown, ...args: unknown[]): unknown {
  //  return null;
  // }
  transform(value: number, ...args: unknown[]): string {
    let seconds = value %60;
    let minutes = Math.floor(value/60); //Math.floor = supprime les nbr aprés la virgule
    
    return `${minutes < 10 ? '0' : ''}${minutes}: ${seconds < 10 ? '0' : ''} `;
  }

}
