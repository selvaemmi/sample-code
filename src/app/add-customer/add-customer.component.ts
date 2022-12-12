import { Component, EventEmitter } from '@angular/core';
import { Customer } from '../model/customer';
import { Output } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customers:Customer[]=[];
  @Output() customerAdded=new EventEmitter<Customer[]>

         constructor(){}
        
    addCustomer(customer_name:string): void{

  const customer ={name:customer_name};
    this.customers.push(customer)
    this.customerAdded.emit(this.customers)
}
}
