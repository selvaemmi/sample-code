import { Component } from '@angular/core';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customers:Customer[]=[];
   
addCustomer(customer_name:string){
  const customer ={name:customer_name};
    this.customers.push(customer)
    console.log(this.customers);
}
}
