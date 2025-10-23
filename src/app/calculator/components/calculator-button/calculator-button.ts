import {ChangeDetectionStrategy, Component, HostBinding, input} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "w-1/4 border-r border-b border-indigo-400"
  }
})
export class CalculatorButton {
  isOperationButton = input<boolean>(false)
  // isOperationButton = input(false,
  //   {transform: (value: string|boolean)=> typeof value === 'string' ? value === '': value}
  // )
  @HostBinding('class.operational-button') get operationalButton(){
    return this.isOperationButton()
  }

  @HostBinding('class.number-button') get numberButton(){
    return !this.isOperationButton()
  }
}
