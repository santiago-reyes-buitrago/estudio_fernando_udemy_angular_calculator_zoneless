import { Component } from '@angular/core';
import {CalculatorButton} from '@calculator/components/calculator-button/calculator-button';

interface CalculatorButtons {
  value: string;
  isOperation: boolean;
  size: number;
}

@Component({
  selector: 'calculator',
  imports: [
    CalculatorButton
  ],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  protected buttons:CalculatorButtons[] =
    [
      {value:'C', isOperation:true, size: 1},
      {value:'+/-',isOperation: true, size: 1},
      {value:'%',isOperation: true, size: 1},
      {value:'÷',isOperation: true, size: 1},
      {value:'7',isOperation: false, size: 1},
      {value:'8',isOperation: false, size: 1},
      {value:'9',isOperation: false, size: 1},
      {value:'x',isOperation: true, size: 1},
      {value:'4',isOperation: false, size: 1},
      {value:'5',isOperation: false, size: 1},
      {value:'6',isOperation: false, size: 1},
      {value:'-',isOperation: true, size: 1},
      {value:'1',isOperation: false, size: 1},
      {value:'2',isOperation: false, size: 1},
      {value:'3',isOperation: false, size: 1},
      {value:'+',isOperation: true, size: 1},
      {value:'0',isOperation: false, size: 1},
      {value:'.',isOperation: true, size: 1},
      {value:'=',isOperation: true, size: 2}
    ];
}
