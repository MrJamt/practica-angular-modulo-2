import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Stock } from '../../interfaces/stock.interface';
import { JsonPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-stock-add-reactive-form',
  imports: [JsonPipe, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './stock-add-reactive-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StockAddReactiveForm {
  reactiveStockAddTitle = signal<string>("Agregar stock reactivo");

  private fb = inject(FormBuilder);

  OnNewStock = output<Stock>();

  public reactiveStockForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    cuantity: [0, [Validators.required, Validators.min(1)]],
  });

  addStock() {
    const { name, cuantity } = this.reactiveStockForm.value;

    const newStock: Stock = {
      id: Math.floor(Math.random() * 100),
      name: name!,
      cuantity: cuantity!,
    };

    this.OnNewStock.emit(newStock);
    this.reactiveStockForm.reset();
  }
}
