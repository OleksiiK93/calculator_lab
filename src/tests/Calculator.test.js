import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let plus;
  let minus;
  let divide;
  let multiply;
  let decimal;
  let clear;
  let equals;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator/>);
    runningTotal = container.getByTestId('running-total')
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    button0 = container.getByTestId('number0');
    plus = container.getByTestId('operator-add');
    minus = container.getByTestId('operator-subtract');
    divide = container.getByTestId('operator-divide');
    multiply = container.getByTestId('operator-multiply');
    decimal = container.getByTestId('decimal');
    clear = container.getByTestId('clear');
    equals = container.getByTestId('operator-equals');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add numbers up', () => {
    fireEvent.click(button1);
    fireEvent.click(plus);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract numbers', () => {
    fireEvent.click(button7);
    fireEvent.click(minus);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply numbers', () => {
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide numbers', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate number button clicks', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('21');
  })

  it('should chain multiple operations together', () => {
    fireEvent.click(button3);
    fireEvent.click(plus);
    fireEvent.click(button5);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('16');
  })

  it('should clear the running total without affecting the calculation', () => {
    fireEvent.click(button3);
    fireEvent.click(plus);
    fireEvent.click(button5);
    fireEvent.click(clear);
    fireEvent.click(plus);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  
})

