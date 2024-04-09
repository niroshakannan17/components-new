import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from '../model/customer';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent {
  
  @Input('customersInput') customers:Customer[] = [];
}
