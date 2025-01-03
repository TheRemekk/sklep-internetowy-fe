import { Component, forwardRef, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: QuantityControlComponent,
      multi: true,
    },
  ],
})
export class QuantityControlComponent
  implements ControlValueAccessor, OnDestroy
{
  quantityControl = new FormControl(1);
  sub = new Subscription();

  constructor() {
    this.sub.add(
      this.quantityControl.valueChanges.subscribe((value) => {
        this.onChange(`${value}`);
      })
    );
  }

  decrement() {
    const currentValue = Number(this.quantityControl.value);
    if (currentValue > 1) {
      this.quantityControl.setValue(currentValue - 1);
    }
  }

  increment() {
    const currentValue = Number(this.quantityControl.value);
    if (currentValue < 300) {
      this.quantityControl.setValue(currentValue + 1);
    }
  }
  onChange = (value: string | null) => {};
  onTouch = () => {};

  writeValue(value: number): void {
    this.quantityControl.setValue(value);
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
