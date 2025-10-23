import { Component } from '@angular/core';
import {CalculatorButton} from '@calculator/components/calculator-button/calculator-button';

interface CalculatorButtons {
  value: string;
  isOperation: boolean;
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
      {value:'C', isOperation:true},
      {value:'+/-',isOperation: true},
      {value:'%',isOperation: true},
      {value:'÷',isOperation: true},
      {value:'7',isOperation: false},
      {value:'8',isOperation: false},
      {value:'9',isOperation: false},
      {value:'x',isOperation: true},
      {value:'4',isOperation: false},
      {value:'5',isOperation: false},
      {value:'6',isOperation: false},
      {value:'-',isOperation: true},
      {value:'1',isOperation: false},
      {value:'2',isOperation: false},
      {value:'3',isOperation: false},
      {value:'+',isOperation: true},
      {value:'0',isOperation: false},
      {value:'.',isOperation: true},
      {value:'=',isOperation: true}
    ];
}
