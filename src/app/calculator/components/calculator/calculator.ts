import {ChangeDetectionStrategy, Component, HostListener, viewChildren} from '@angular/core';
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
  standalone: true,
  styleUrl: './calculator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class Calculator {
  Calculatorbuttons = viewChildren(CalculatorButton);
  protected buttons: CalculatorButtons[] =
    [
      {value: 'C', isOperation: true, size: 1},
      {value: '+/-', isOperation: true, size: 1},
      {value: '%', isOperation: true, size: 1},
      {value: '÷', isOperation: true, size: 1},
      {value: '7', isOperation: false, size: 1},
      {value: '8', isOperation: false, size: 1},
      {value: '9', isOperation: false, size: 1},
      {value: 'x', isOperation: true, size: 1},
      {value: '4', isOperation: false, size: 1},
      {value: '5', isOperation: false, size: 1},
      {value: '6', isOperation: false, size: 1},
      {value: '-', isOperation: true, size: 1},
      {value: '1', isOperation: false, size: 1},
      {value: '2', isOperation: false, size: 1},
      {value: '3', isOperation: false, size: 1},
      {value: '+', isOperation: true, size: 1},
      {value: '0', isOperation: false, size: 1},
      {value: '.', isOperation: true, size: 1},
      {value: '=', isOperation: true, size: 2}
    ];

  handleClickEvent(key: string) {
    console.log({key})
  }

  // @HostListener('document:keyup',['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log(event,event.key)
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      Enter: '=',
      '/': '÷',
      '*': 'x'
    }
    const actualValue = keyEquivalents[event.key] ? keyEquivalents[event.key]: event.key
    this.handleClickEvent(actualValue)
    this.Calculatorbuttons().forEach(button => {
      button.keyboardPressedStyle(actualValue)
    })
  }
}
