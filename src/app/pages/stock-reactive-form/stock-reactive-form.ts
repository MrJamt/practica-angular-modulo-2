import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StockAddReactiveForm } from '../../components/stock-add-reactive-form/stock-add-reactive-form';
import { StockList } from '../../components/stockList/stockList';
import { StockService } from '../../services/stockService';

@Component({
  selector: 'app-stock-reactive-form',
  imports: [StockAddReactiveForm, StockList],
  templateUrl: './stock-reactive-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StockReactiveForm {
  public stockService = inject(StockService);

}
