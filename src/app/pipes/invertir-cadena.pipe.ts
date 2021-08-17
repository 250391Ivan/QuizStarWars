import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertirCadena'
})
export class InvertirCadenaPipe implements PipeTransform {

 
  transform(value: string, ...args: unknown[]): unknown {

    let salida = value.split("").reverse().join("");
    return  salida
  }

}
