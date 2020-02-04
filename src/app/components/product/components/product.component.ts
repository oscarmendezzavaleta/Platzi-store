import { Component,  OnInit  } from '@angular/core';

import {Product} from '../../../core/models/product.model';
import { ProductsService} from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements   OnInit {


  products: Product[];

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  constructor(private productService: ProductsService) {}

  addCart() {
    console.log('añadir al carrito');
  }
  ngOnInit(): void {

    this.products = this.productService.getAllProducts();

   }

}

