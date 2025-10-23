import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CalculatorView} from '@calculator/components/calculator-view/calculator-view';

@Component({
  selector: 'calculator-page',
  imports: [
    CalculatorView

  ],
  templateUrl: './calculator-page.component.html',
  styleUrl: './calculator-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CalculatorPageComponent {

}
