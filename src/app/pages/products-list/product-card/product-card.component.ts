import { Component, inject, input } from '@angular/core';
import { Product } from '../products-list.component';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  cartService = inject(CartService);

  product = input.required<Product>();

}
