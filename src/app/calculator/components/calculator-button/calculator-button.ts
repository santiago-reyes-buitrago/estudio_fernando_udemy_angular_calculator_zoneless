import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrl: './calculator-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: `border-r border-b border-indigo-400`,
    '[class]': `size()`
  },
  // encapsulation: ViewEncapsulation.None
})
export class CalculatorButton {
  size= input<string>('grid-spacing-1');
  isOperationButton = input<boolean>(false);
  contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  onClick = output<string>();
  isPressed = signal<boolean>(false);
  protected handleClick() {
    const value = this.contentValue()?.nativeElement.innerText.trim();
    if (!value) return;

    this.onClick.emit(value);
  }
  keyboardPressedStyle(key: string){
    if (!this.contentValue()) return;
    const value = this.contentValue()?.nativeElement.innerText.trim();
    if (value !== key) return;
    this.isPressed.set(true);
    setTimeout(()=> this.isPressed.set(false),100)
  }
  // isOperationButton = input(false,
  //   {transform: (value: string|boolean)=> typeof value === 'string' ? value === '': value}
  // )
  // @HostBinding('class.operational-button') get operationalButton(){
  //   return this.isOperationButton()
  // }
  //
  // @HostBinding('class.number-button') get numberButton(){
  //   return !this.isOperationButton()
  // }
}
