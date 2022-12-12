import { Component } from '@angular/core';
import { Customer } from './model/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';
  customers:Customer[]=[];
  getCustomer(customers:Customer[]){
   this.customers=customers;
  }
}
