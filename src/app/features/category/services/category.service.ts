import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../core/models/category.model';
import { Product } from '../../../core/models/product.modal';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}products/categories`);
  }

  getProductsByCategory(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products/category/${id}`);
  }

}