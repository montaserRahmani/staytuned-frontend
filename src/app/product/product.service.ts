import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Temp
  private apiBaseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getProductsByCategory(id: string, limit = 4) {
    return this.http.get(this.apiBaseUrl + 'product?join=category&filter=category.id||$eq||' + id + '&limit=' + limit);
  }

  getProduct(id: string) {
    return this.http.get(this.apiBaseUrl + 'product/' + id);
  }

  getHomeCategories() {
    return this.http.get(this.apiBaseUrl + 'category?join=products&filter=isActive||$eq||true&sort=order,ASC');
  }

  subscribeToNotification(data: any){
    return this.http.post(this.apiBaseUrl + 'notification', data);
  }

  updateSubscribtion(id: string, data: any){
    return this.http.put(this.apiBaseUrl + 'notification/' + id, data);
  }

}
