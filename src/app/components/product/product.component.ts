import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from './../../models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productService: ProductService) {}

  products: IProduct[] = [];

  selectedProduct?: IProduct;

  onSelect(product: IProduct): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
