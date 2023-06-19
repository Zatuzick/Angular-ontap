import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/products`)
  }
  getOneProduct(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/products/${id}`)
  }
  removeProduct(id: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/products`, product)
  }
  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/products/${product.id}`, product)
  }
}
