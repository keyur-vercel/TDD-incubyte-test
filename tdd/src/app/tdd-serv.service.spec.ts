import { TestBed } from '@angular/core/testing';

import { TddServService } from './tdd-serv.service';

describe('TddServService', () => {
  let service: TddServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TddServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sum of two numbers properly', () => {
    const result = service.sumOfTwoNumber(1, 5);
    expect(result).toEqual(6);
  });

  it('should reverse a string properly', () => {
    const result = service.reverseGivenString('keyur');
    console.log('result : reverse string >>', result);
    expect(result).toEqual('ruyek');
  });

  it('should sort the array into ascending order', () => {
    let array = [5, 9, 3, 7, 1];
    const result = service.sortArrayIntoAscending(array);
    console.log('result : ascending of order >>', result);
    expect(result).toEqual([1, 3, 5, 7, 9]);
  });

  it('should sort the array into decending order', () => {
    let array = [5, 9, 3, 7, 1];
    const result = service.sortArrayIntoDecending(array);
    console.log('result : decending of order >>', result);
    expect(result).toEqual([9, 7, 5, 3, 1]);
  });

  it('should calculate factorial number ', () => {
    let no = 5;
    const result = service.calculateFactorial(no);
    console.log(`result : calculate factorial of ${no}  >>`, result);
    expect(result).toEqual(120);
  });

  it('should calculate 15% percentage of given number', () => {
    let no = 120;
    const result = service.calculatePercentage(no);
    console.log(`result : calculate 15% of ${no} is >>`, result);
    expect(result).toEqual(18);
  });

  it('should give large and small number from given array', () => {
    let array = [5, 2, 7, 1, 9, 3];
    const result = service.generateLargeAndSmall(array);
    console.log(
      `result : calculate large and small number from given array ${array} is >>`,
      result
    );
    expect(result).toEqual({ smallest: 1, largest: 9 });
  });

  it('should give fibonacci series of given number', () => {
    let no = 5;
    const result = service.generateFibonacciSeries(no);
    console.log(`result : fibonacci series of  ${no} is >>`, result);
    expect(result).toEqual([0, 1, 1, 2, 3, 5]);
  });

  it('should join array and sort it too', () => {
    let array = [6, 3, 1];
    let array1 = [5, 2, 4];
    const result = service.joinTwoArrayAndSortIt(array, array1);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
