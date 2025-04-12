import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    const cartItems = [...this.cart()];
    const index = cartItems.findIndex(p => p.id === id);
    if (index > -1) {
      cartItems.splice(index, 1);
      this.cart.set(cartItems);
    }
  }

  constructor() { }
}
