import { TestWatcher } from 'jest';
import functions from '../../functions/functions';

describe('divideIt function should take two number and should return result of the division', () => {
  it('should complete the division correctly', () => {
    //act
    let firstNumber = 10;
    let secondNumber = 5;
    //arrange
    let result = functions.divideIt(firstNumber, secondNumber);
    //assertion
    expect(result).toBe(2);
  });

  it('should throw an error if the dividend is 0', () => {
    let firstNumber = 'not a number';
    let secondNumber = 10;
    
    expect(() => functions.divideIt(firstNumber, secondNumber)).toThrowError(
      'Dividend or divisor is not a number'
    );
  });

  it('should throw an error if the divisor is 0', () => {
    let firstNumber = 10;
    let secondNumber = 'not a number';
    expect(() => functions.divideIt(firstNumber, secondNumber)).toThrowError(
      'Dividend or divisor is not a number'
    );
  });

  it('should throw an error if the dividend is 0', () => {
    let firstNumber = 10;
    let secondNumber = 0;
    expect(() => functions.divideIt(firstNumber, secondNumber)).toThrowError(
      'Divided by Zero'
    );
  });
});

describe('convertTitleCase function', () => {
  it('should return parameter to Title Case', () => {
    let titleValue = 'test';
    expect(functions.convertTitleCase(titleValue)).toBe('Test');
  });

  it('should return parameter to Title Case even if it has more than one word', () => {
    let titleValue = 'test it again with more than one word';
    expect(functions.convertTitleCase(titleValue)).toBe(
      'Test It Again With More Than One Word'
    );
  });
});


