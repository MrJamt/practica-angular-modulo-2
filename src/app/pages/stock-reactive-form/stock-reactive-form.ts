import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockAddReactiveForm } from '../../components/stock-add-reactive-form/stock-add-reactive-form';

@Component({
  selector: 'app-stock-reactive-form',
  imports: [StockAddReactiveForm],
  templateUrl: './stock-reactive-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockReactiveForm {

}
