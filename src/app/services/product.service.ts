import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { MOCK_PRODUCT } from '../mocks/mock.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<IProduct[]> {
    const product = of(MOCK_PRODUCT);
    return product;
  }
}
