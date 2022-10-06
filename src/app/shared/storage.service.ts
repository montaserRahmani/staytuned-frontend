import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageKey = 'staytuned';

  constructor() {
    // initializing the storage
    if( !localStorage.getItem('staytuned') ) {
      localStorage.setItem('staytuned', JSON.stringify({
        subscriptions: [],
      }));
    }
  }

  getSubscription(productId: string){
    const subscriptions = this.getStoredProerty('subscriptions');

    return subscriptions.filter((sub: any) => sub.productId === productId)[0];
  }

  addSubscription(productId: string, notificationId: string){
    let subscriptions = this.getStoredProerty('subscriptions');

    subscriptions.push({
      productId,
      notificationId,
    });

    this.saveProperty('subscriptions', subscriptions);
  }

  removeSubscription(notificationId: string){
    let subscriptions = this.getStoredProerty('subscriptions');
    subscriptions = subscriptions.filter((sub: any) => sub.notificationId !== notificationId);
    this.saveProperty('subscriptions', subscriptions);
  }

  getStoredProerty(key: string){
    const storage = JSON.parse(localStorage.getItem('staytuned') || '');

    return storage[key];
  }

  saveProperty(key: string, data: any){
    let storage = JSON.parse(localStorage.getItem('staytuned') || '');

    storage[key] = data;

    localStorage.setItem('staytuned', JSON.stringify(storage));
  }
}
