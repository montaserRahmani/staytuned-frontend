import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsByCategory(id: string, limit = 4) {
    return this.http.get('product?join=category&filter=category.id||$eq||' + id + '&limit=' + limit);
  }

  getProduct(id: string) {
    return this.http.get('product/' + id);
  }

  getHomeCategories() {
    return this.http.get('category?join=products&filter=isActive||$eq||true&sort=order,ASC');
  }

  subscribeToNotification(data: any){
    return this.http.post('notification', data);
  }

  updateSubscribtion(id: string, data: any){
    return this.http.put('notification/' + id, data);
  }

}
