import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product?: IProduct;
}
