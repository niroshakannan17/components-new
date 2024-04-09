import { Component } from '@angular/core';
import { Customer } from './model/customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newcomponentflow';

  customers:Customer[] = [];

  getCustomer( customers:Customer[])
  {
    this.customers = customers;

    console.log(this.customers );

    
  }
}
