import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.modal';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;  

}
