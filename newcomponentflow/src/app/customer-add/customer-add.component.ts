import { Component, EventEmitter } from '@angular/core';
import { Customer } from '../model/customer';
import { Output } from '@angular/core';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {

  customers:Customer[]=[]; // Customer is class 

  
  @Output() AddCust:EventEmitter<Customer[]>= new EventEmitter;

  addCustomer(customerName:string){
    // we have to create one object for above class
    let cust:Customer={'name':customerName}
    this.customers.push(cust);
    console.log(this.customers)
    this.AddCust.emit(this.customers);
    
  }

}
