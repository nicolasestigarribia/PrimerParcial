import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/Models';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product : Product = new Product()
  @Output() createProduct : EventEmitter<Product> = new EventEmitter();

  constructor(private productService : ProductService)
  {
  }

  public addProducto()
  {
    this.createProduct.emit(this.product);
    this.product = new Product()
  }
 
}
