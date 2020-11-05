import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  
  form: FormGroup;
  orders = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });

  
  }

  getOrders() {
    return [
      { id: '1', name: 'confort car ' },
      { id: '2', name: 'secur car' },
      { id: '3', name: 'best car ' },
      { id: '4', name: 'expensive car' }
    ];
  }

  submit() {
    console.log(this.form.value);
  }

}
