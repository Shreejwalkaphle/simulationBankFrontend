import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'https://simulationbankbackend.onrender.com/api/customers'; // Update this with your actual API base URL

  constructor(private http: HttpClient) { }

  // Login method
  loginCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, customer);
  }

  // Register method
  registerCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, customerData);
  }
  // Login method
  depositAmount(customerId: number, amount: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/${customerId}/deposit`, null, {
      params: { amount: amount.toString() }
    });
  }

  withdrawAmount(customerId: number, amount: number): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/${customerId}/withdraw`, null, {
      params: { amount: amount.toString() }
    });
  }
  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
