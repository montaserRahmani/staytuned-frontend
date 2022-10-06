import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Temp
  private apiBaseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getProductsByCategory(id: string) {
    return this.http.get(this.apiBaseUrl + 'product?join=category&filter=category.id||$eq||' + id);
  }

  getProduct(id: string) {
    return this.http.get(this.apiBaseUrl + 'product/' + id);
  }

  getHomeCategories() {
    return this.http.get(this.apiBaseUrl + 'category?join=product&filter=isActive||$eq||true&sort=createdAt,DESC');
  }
}
