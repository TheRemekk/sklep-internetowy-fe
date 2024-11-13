import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../../core/services/form.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DeliveryForm } from '../../../../core/models/forms.model';
import { DeliveryService } from '../../../../core/services/delivery.service';
import { GetDelivery } from '../../../../core/models/delivery.model';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  deliveryForm: FormGroup<DeliveryForm> = this.formService.initDeliveryForm();
  deliveryTypes: GetDelivery[] = [];
  errorMsg: string | null = null;

  constructor(
    private formService: FormService,
    private deliveryService: DeliveryService
  ) {}

  get controls() {
    return this.deliveryForm.controls;
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }

  ngOnInit(): void {
    this.deliveryService.getDelivery().subscribe({
      next: (delivery) => {
        this.deliveryTypes = [...delivery];
      },
      error: (err) => {
        this.errorMsg = err;
      },
    });
  }
}
