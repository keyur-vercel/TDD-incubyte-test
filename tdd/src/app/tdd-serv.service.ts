import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TddServService {
  constructor() {}

  sumOfTwoNumber(a: number, b: number): number {
    return a + b;
  }

  reverseGivenString(str: string): string {
    let length = str.length;
    let reverse: string = '';

    for (let i = length - 1; i >= 0; i--) {
      reverse += str[i];
    }

    return reverse;
  }

  sortArrayIntoAscending(array: number[]) {
    return array.sort((a, b) => a - b);
  }

  sortArrayIntoDecending(array: number[]) {
    return array.sort((a, b) => b - a);
  }

  calculateFactorial(no: number): number {
    let factorilaNumber = 1;

    for (let i = no; i >= 1; i--) {
      factorilaNumber = factorilaNumber * i;
    }
    return factorilaNumber;
  }

  calculatePercentage(no: number): number {
    return (no * 15) / 100;
  }

  generateLargeAndSmall(array: number[]) {
    array.sort((a, b) => a - b);

    return {
      smallest: array[0],
      largest: array[array.length - 1],
    };
  }

  generateFibonacciSeries(no: number) {
    let array = [];
    for (let i = 0; i <= no; i++) {
      if (i <= 1) {
        array.push(i);
        continue;
      }

      array.push(array[i - 2] + array[i - 1]);
    }
    return array;
  }

  joinTwoArrayAndSortIt(array: number[], array1: number[]) {
    let join = [...array, ...array1];

    join.sort((a, b) => a - b);

    return join;
  }
}
