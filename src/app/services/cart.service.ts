import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product): void {
    let item = CartItems.find((c) => c.product.productId === product.productId);

    if (item) {
      item.quantity++;
    } else {
      CartItems.push({ product: product, quantity: 1 });
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(product: Product): void {
    let item: CartItem = CartItems.find(
      (c) => c.product.productId === product.productId
    );

    CartItems.splice(CartItems.indexOf(item), 1);
  }
}
