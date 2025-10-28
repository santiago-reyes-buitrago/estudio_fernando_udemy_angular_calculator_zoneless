import {Injectable, signal} from '@angular/core';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', 'x', '/'];
const specialOperators = ['+/-', '%', '.', '=', 'C', 'Backspace']
const operations: Record<string, Function> = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  'x': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  resultText = signal<string>('0');
  subResultText = signal<string>('0');
  lastOperatorText = signal<string>('+');

  constructNumber(value: string): void {
    if (![...numbers, ...operators, ...specialOperators].includes(value)) {
      console.log('valor invalido: ', value);
      return;
    }
    if (value === '='){
      // if (this.subResultText() === '' || this.resultText() === '') return;
      this.calculateResult();
      return;
    }

    if (value === 'C') {
      this.resultText.set('0');
      this.subResultText.set('0');
      this.lastOperatorText.set('+');
      return;
    }

    if (value === 'Backspace') {
      if (this.resultText() === '0') return;
      if (this.resultText().length === 1) {
        this.resultText.set('0');
        return;
      }
      this.resultText.set(this.resultText().slice(0, -1));
      return;
    }

    if (operators.includes(value)) {
      this.lastOperatorText.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }

    if (this.resultText().length >= 10) {
      console.log('Valor supera el maximo de caracteres');
      return;
    }

    if (value === '.' && !this.resultText().includes('.')) {
      if (this.resultText() === '0' || this.resultText() === '') {
        this.resultText.set('0.')
        return;
      }
      this.resultText.update((text) => text + '.');
      return;
    }
    if (value === '0' && (this.resultText() === '0' || this.resultText() === '-0')) return;

    if (value === '+/-') {
      if (this.resultText().includes('-')) {
        this.resultText.set(this.resultText().slice(1));
        return;
      }
      this.resultText.set('-' + this.resultText());
      return;
    }

    if (numbers.includes(value)) {
      if (this.resultText() === '0') {
        this.resultText.set(value);
        return;
      }
      if (this.resultText() === '-0') {
        this.resultText.set('-' + value);
        return;
      }
      this.resultText.update((text) => text + value);
    }
    // if (value === '%') {
    //   this.resultText.set(this.resultText().slice(0,-1));
    //   return;
    // }
  }
  calculateResult(){
    const numbers: number[] = [+this.resultText(),+this.subResultText()];
    const operator = this.lastOperatorText();
    if (!operations[operator]){
      console.log('Operations not valid');
      return;
    }
    this.subResultText.set('0')
    this.resultText.set(operations[operator](numbers[0],numbers[1]));
  }
}
